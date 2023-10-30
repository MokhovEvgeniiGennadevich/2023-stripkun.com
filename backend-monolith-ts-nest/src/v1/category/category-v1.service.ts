import { Injectable } from '@nestjs/common';
import CategoryV1Repository from './category-v1.repository';

@Injectable()
export class CategoryV1Service {
  constructor(private readonly categoryV1Repository: CategoryV1Repository) {}

  get() {
    return this.categoryV1Repository.get();
  }

  create() {
    return this.categoryV1Repository.create({
      id: 'c32d8b46-92fe-44f6-fb61-42c2107dfe87',
      name: 'fsdfdsf',
    });
  }
}
