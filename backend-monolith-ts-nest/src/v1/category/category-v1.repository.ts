import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import DatabaseService from 'src/database.service';
import CreateDTO from './create.dto';
import CategoryV1NameModel from './category-v1.model';

@Injectable()
class CategoryV1Repository {
  constructor(private readonly databaseService: DatabaseService) {}

  async get() {
    const databaseResponse = await this.databaseService.runQuery(`
      SELECT * FROM category_name
    `);
    return plainToInstance(CategoryV1NameModel, databaseResponse.rows);
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
}

export default CategoryV1Repository;
