import { Test, TestingModule } from '@nestjs/testing';
import { CategoryV1Service } from './category-v1.service';

describe('CategoryV1Service', () => {
  let service: CategoryV1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryV1Service],
    }).compile();

    service = module.get<CategoryV1Service>(CategoryV1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
