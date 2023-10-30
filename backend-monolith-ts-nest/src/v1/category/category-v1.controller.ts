import { Controller, Get } from '@nestjs/common';
import { CategoryV1Service } from './category-v1.service';

@Controller('v1/category')
export class CategoryV1Controller {
  constructor(private readonly categoryV1Service: CategoryV1Service) {}

  @Get('get')
  get() {
    return this.categoryV1Service.get();
  }

  @Get('create')
  create() {
    return this.categoryV1Service.create();
  }
}
