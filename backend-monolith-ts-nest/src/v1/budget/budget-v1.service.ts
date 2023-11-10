import { Body, Injectable } from '@nestjs/common';
import { CreateBudgetV1DTO, GetBudgetPaginationQueryV1DTO } from './budget.dto';
import BudgetV1Repository from './budget-v1.repository';

// Business Logic Here

@Injectable()
export class BudgetV1Service {
  constructor(private readonly budgetV1Repository: BudgetV1Repository) {}
  get(getBudgetPaginationQueryV1DTO: GetBudgetPaginationQueryV1DTO) {
    return this.budgetV1Repository.get(getBudgetPaginationQueryV1DTO);
  }

  create(@Body() createBudgetV1Dto: CreateBudgetV1DTO) {
    return this.budgetV1Repository.create(createBudgetV1Dto);
  }
}
