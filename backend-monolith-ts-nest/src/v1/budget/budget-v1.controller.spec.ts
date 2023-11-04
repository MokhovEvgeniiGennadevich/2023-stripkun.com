import { Test, TestingModule } from '@nestjs/testing';
import { BudgetV1Controller } from './budget-v1.controller';

describe('BudgetV1Controller', () => {
  let controller: BudgetV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetV1Controller],
    }).compile();

    controller = module.get<BudgetV1Controller>(BudgetV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
