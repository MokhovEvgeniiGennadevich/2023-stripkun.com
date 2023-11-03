import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import DatabaseService from 'src/database.service';
import CreateDTO from './create.dto';
import CategoryV1NameModel, {
  CategoryV1UpdateModel,
} from './category-v1.model';

@Injectable()
class CategoryV1Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  // get all categories from database
  async get() {
    // select categoryName
    const categoryResponse = await this.databaseService.runQuery(`
      SELECT category_name.id, category_name.name, category_pid.pid FROM category_name
      LEFT JOIN category_pid ON category_name.id = category_pid.id
    `);

    if (categoryResponse.rows.length === 0) {
      return {
        message: 'error',
      };
    }

    return plainToInstance(CategoryV1NameModel, categoryResponse.rows);
  }

  async getById(id: string) {
    // get categoryName
    const databaseResponse = await this.databaseService.runQuery(
      `
      SELECT id, name FROM category_name WHERE id = $1
    `,
      [id],
    );

    // get categoryPid
    const categoryPidResponse = await this.databaseService.runQuery(
      `
      SELECT pid FROM category_pid WHERE id = $1
    `,
      [id],
    );

    let pid = null;
    if (categoryPidResponse.rows[0]?.pid) {
      pid = categoryPidResponse.rows[0].pid;
    }

    // Response Result
    const responseResult = {
      id: databaseResponse.rows[0].id,
      name: databaseResponse.rows[0].name,
      pid: pid,
    };

    return plainToInstance(CategoryV1NameModel, responseResult);
  }

  async create(postData: CreateDTO) {
    const databaseResponse = await this.databaseService.runQuery(
      `
      
      INSERT INTO category_name (
        id,
        name
      ) VALUES (
        $1,
        $2
      ) RETURNING *
    `,
      [postData.id, postData.name],
    );
    return plainToInstance(CategoryV1Repository, databaseResponse.rows[0]);
  }

  async update(postData: CategoryV1UpdateModel) {
    const nameUpdateResponse = await this.databaseService.runQuery(
      `
      UPDATE category_name
      SET name = $1
      WHERE id = $2
      RETURNING *
    `,
      [postData.name, postData.id],
    );

    // Select Category PID
    const pidQueryResponse = await this.databaseService.runQuery(
      `
      SELECT pid FROM category_pid WHERE id = $1
      `,
      [postData.id],
    );

    const categoryPidFound = pidQueryResponse.rowCount;

    if (categoryPidFound === 0) {
      // Insert Category PID
      const CategoryPid = await this.databaseService.runQuery(
        `
        INSERT INTO category_pid (id, pid) VALUES ($2, $1)
          RETURNING *;
        `,
        [postData.pid, postData.id],
      );
    } else {
      // Update Category PID
      const CategoryPid = await this.databaseService.runQuery(
        `
        UPDATE category_pid
        SET pid = $1
        WHERE id = $2
        RETURNING *;
        `,
        [postData.pid, postData.id],
      );
    }

    return plainToInstance(CategoryV1UpdateModel, nameUpdateResponse.rows[0]);
  }
}

export default CategoryV1Repository;
