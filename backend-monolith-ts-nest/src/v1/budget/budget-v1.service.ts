import { Body, Injectable } from '@nestjs/common';
import { CreateBudgetDtoV1 } from './budget.dto';
import BudgetV1Repository from './budget-v1.repository';

@Injectable()
export class BudgetV1Service {
  constructor(private readonly budgetV1Repository: BudgetV1Repository) {}
  get() {
    return {
      message: 'error',
    };
  }

  create(@Body() createBudgetDtoV1: CreateBudgetDtoV1) {
    return this.budgetV1Repository.create(createBudgetDtoV1);
  }
}
