import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryV1Service } from './category-v1.service';
import { CategoryUpdateV1DTO, CreateCategoryV1DTO } from './category.dto';

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
  // Enable validation
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createCategoryV1DTO: CreateCategoryV1DTO) {
    return this.categoryV1Service.create(createCategoryV1DTO);
  }

  @Put('update')
  // Enable validation
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Body() categoryUpdateDto: CategoryUpdateV1DTO) {
    return this.categoryV1Service.update(categoryUpdateDto);
  }
}
