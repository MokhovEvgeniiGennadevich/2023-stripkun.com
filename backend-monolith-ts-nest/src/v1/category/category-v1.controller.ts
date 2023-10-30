import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryV1Service } from './category-v1.service';
import CreateDTO from './create.dto';

@Controller('v1/category')
export class CategoryV1Controller {
  constructor(private readonly categoryV1Service: CategoryV1Service) {}

  @Get('get')
  get() {
    return this.categoryV1Service.get();
  }

  @Get('get/:id')
  getById(@Param('id') id: string) {
    return this.categoryV1Service.getById(id);
  }

  @Post('create')
  create(@Body() createDto: CreateDTO) {
    return this.categoryV1Service.create(createDto);
  }
}
