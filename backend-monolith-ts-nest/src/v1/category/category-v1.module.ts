import { Module } from '@nestjs/common';
import { CategoryV1Controller } from './category-v1.controller';
import { CategoryV1Service } from './category-v1.service';
import CategoryV1Repository from './category-v1.repository';

@Module({
  imports: [],
  controllers: [CategoryV1Controller],
  providers: [CategoryV1Service, CategoryV1Repository],
})
export class CategoryV1Module {}
