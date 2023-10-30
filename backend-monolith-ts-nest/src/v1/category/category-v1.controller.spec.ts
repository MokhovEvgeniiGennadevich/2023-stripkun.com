import { Test, TestingModule } from '@nestjs/testing';
import { CategoryV1Controller } from './category-v1.controller';

describe('CategoryV1Controller', () => {
  let controller: CategoryV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryV1Controller],
    }).compile();

    controller = module.get<CategoryV1Controller>(CategoryV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
