import { Body, Injectable } from '@nestjs/common';
import CategoryV1Repository from './category-v1.repository';
import { CategoryUpdateV1DTO, CreateCategoryV1DTO } from './category.dto';

// Business Logic Here

@Injectable()
export class CategoryV1Service {
  constructor(private readonly categoryV1Repository: CategoryV1Repository) {}

  get() {
    return this.categoryV1Repository.get();
  }

  getById(id: string) {
    return this.categoryV1Repository.getById(id);
  }

  create(@Body() createCategoryV1DTO: CreateCategoryV1DTO) {
    return this.categoryV1Repository.create(createCategoryV1DTO);
  }

  update(@Body() categoryUpdateDto: CategoryUpdateV1DTO) {
    return this.categoryV1Repository.update(categoryUpdateDto);
  }
}
