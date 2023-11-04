import { Body, Controller, Get, Post } from '@nestjs/common';
import { BudgetV1Service } from './budget-v1.service';
import { CreateBudgetDtoV1 } from './budget.dto';

@Controller('v1/budget')
export class BudgetV1Controller {
  constructor(private readonly budgetV1Service: BudgetV1Service) {}

  @Get('get')
  get() {
    return this.budgetV1Service.get();
  }

  @Post('create')
  create(@Body() createBudgetDtoV1: CreateBudgetDtoV1) {
    return this.budgetV1Service.create(createBudgetDtoV1);
  }
}
