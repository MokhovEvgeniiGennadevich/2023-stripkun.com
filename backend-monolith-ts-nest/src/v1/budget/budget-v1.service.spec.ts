import { Test, TestingModule } from '@nestjs/testing';
import { BudgetV1Service } from './budget-v1.service';

describe('BudgetV1Service', () => {
  let service: BudgetV1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BudgetV1Service],
    }).compile();

    service = module.get<BudgetV1Service>(BudgetV1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
