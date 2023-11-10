import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import DatabaseService from 'src/database.service';
import {
  CreateBudgetV1DTO,
  GetBudgetPaginationQueryV1DTO,
  GetBudgetPaginationResponseDataV1DTO,
} from './budget.dto';

@Injectable()
class BudgetV1Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  // REST API / CRUD
  // get budget items with pagination
  // total - total categories
  // page - current page
  // pageSize - page size
  // lastPage - last page number
  async get(getBudgetPaginationQueryV1DTO: GetBudgetPaginationQueryV1DTO) {
    let getPages = {
      total: 0,
      page: getBudgetPaginationQueryV1DTO.page,
      limit: getBudgetPaginationQueryV1DTO.limit,
      data: [GetBudgetPaginationResponseDataV1DTO],
    };

    // count
    try {
      const budgetCount = await this.databaseService.runQuery(`
        SELECT COUNT(id) FROM budget
      `);

      if (!budgetCount.rows[0].count) {
        return {
          message: 'database',
        };
      }

      getPages.total = budgetCount.rows[0].count;
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // Check if offset if less than TOTAL
    if (getPages.total < getPages.page * getPages.limit) {
      return {
        message: 'database',
      };
    }

    try {
      // select
      const response = await this.databaseService.runQuery(
        `
      SELECT budget.id, summ, category_id, date, note FROM budget
      LEFT JOIN budget_summ ON budget_summ.id = budget.id
      LEFT JOIN budget_category ON budget_category.id = budget.id
      LEFT JOIN budget_date ON budget_date.id = budget.id
      LEFT JOIN budget_note ON budget_note.id = budget.id
      LIMIT $1 OFFSET $2
    `,
        [getPages.limit, getPages.page * getPages.limit],
      );

      if (response.rows.length === 0) {
        return {
          message: 'database',
        };
      }

      getPages.data = response.rows;
    } catch (error) {
      return {
        message: 'database',
      };
    }

    // Result Response
    const ResultResponse = {
      pagination: { total: getPages.total },
      data: getPages.data,
    };

    return ResultResponse;
  }

  async create(createBudgetV1Dto: CreateBudgetV1DTO) {
    const startTransaction = await this.databaseService.runQuery(`
      START TRANSACTION;
    `);

    if (!startTransaction) {
      return {
        message: 'error',
      };
    }

    const budgetResponse = await this.databaseService.runQuery(
      `INSERT INTO budget (id) VALUES (default) RETURNING id`,
    );

    if (!budgetResponse.rows[0].id) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      if (!rollbackTransaction) {
        return {
          message: 'database',
        };
      }

      return {
        message: 'error',
      };
    }

    // Take first element
    const budgetId = budgetResponse.rows[0].id;

    // Check if category exists
    const categoryResponse = await this.databaseService.runQuery(
      `
      SELECT id FROM category_name WHERE id = $1
      `,
      [createBudgetV1Dto.categoryId],
    );

    if (categoryResponse.rows.length === 0) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      return {
        message: 'Category does not exist',
      };
    }

    // Insert CategoryId
    const insertCategoryResponse = await this.databaseService.runQuery(
      `
      INSERT INTO budget_category (id, category_id)
      VALUES ($1, $2)
      RETURNING *
      `,
      [budgetId, createBudgetV1Dto.categoryId],
    );

    if (!insertCategoryResponse.rows[0]) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      return {
        message: 'error',
      };
    }

    // Summ = Summ * 1000
    const summ = createBudgetV1Dto.summ * 1000;

    // Insert Summ
    const insertSummResponse = await this.databaseService.runQuery(
      `
      INSERT INTO budget_summ (id, summ)
      VALUES ($1, $2)
      RETURNING *
      `,
      [budgetId, summ],
    );

    if (!insertSummResponse.rows[0]) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      return {
        message: 'error',
      };
    }

    // Insert Note
    const insertNoteResponse = await this.databaseService.runQuery(
      `
      INSERT INTO budget_note (id, note)
      VALUES ($1, $2)
      RETURNING *
      `,
      [budgetId, createBudgetV1Dto.note],
    );

    // Insert Date
    const insertDateResponse = await this.databaseService.runQuery(
      `
      INSERT INTO budget_date (id, date)
      VALUES ($1, $2)
      RETURNING *
      `,
      [budgetId, createBudgetV1Dto.date],
    );

    if (!insertDateResponse.rows[0]) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      return {
        message: 'error',
      };
    }

    const commitTransaction = await this.databaseService.runQuery(`
      COMMIT;
    `);

    if (!commitTransaction) {
      const rollbackTransaction = await this.databaseService.runQuery(`
        ROLLBACK;
      `);

      return {
        message: 'error',
      };
    }

    return {
      id: budgetId,
    };
  }
}

export default BudgetV1Repository;
