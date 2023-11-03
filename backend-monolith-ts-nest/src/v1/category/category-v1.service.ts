import { Body, Injectable } from '@nestjs/common';
import CategoryV1Repository from './category-v1.repository';
import CreateDTO from './create.dto';
import { CategoryUpdateDTO } from './category.dto';

@Injectable()
export class CategoryV1Service {
  constructor(private readonly categoryV1Repository: CategoryV1Repository) {}

  get() {
    return this.categoryV1Repository.get();
  }

  getById(id: string) {
    return this.categoryV1Repository.getById(id);
  }

  create(@Body() createDto: CreateDTO) {
    return this.categoryV1Repository.create({
      id: crypto.randomUUID(),
      name: createDto.name,
    });
  }

  update(@Body() categoryUpdateDto: CategoryUpdateDTO) {
    return this.categoryV1Repository.update(categoryUpdateDto);
  }
}
