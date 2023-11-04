import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import DatabaseService from 'src/database.service';
import { CreateBudgetDtoV1 } from './budget.dto';

@Injectable()
class BudgetV1Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  // get all categories from database
  async get() {
    // select categoryName
    const response = await this.databaseService.runQuery(`
      SELECT id FROM budget
      LEFT JOIN budget_category ON budget_category.id = budget.id
      LEFT JOIN budget_time ON budget_time.id = budget.id
      LEFT JOIN budget_note ON budget_note.id = budget.id
    `);

    if (response.rows.length === 0) {
      return {
        message: 'error',
      };
    }

    return response.rows;
  }

  async create(createBudgetDtoV1: CreateBudgetDtoV1) {
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
      [createBudgetDtoV1.categoryId],
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
      [budgetId, createBudgetDtoV1.categoryId],
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
    const summ = createBudgetDtoV1.summ * 1000;

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
      [budgetId, createBudgetDtoV1.note],
    );

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
