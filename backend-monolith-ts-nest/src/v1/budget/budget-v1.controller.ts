import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BudgetV1Service } from './budget-v1.service';
import { CreateBudgetV1DTO } from './budget.dto';

@Controller('v1/budget')
export class BudgetV1Controller {
  constructor(private readonly budgetV1Service: BudgetV1Service) {}

  @Get('get')
  get() {
    return this.budgetV1Service.get();
  }

  @Post('create')
  // Enable validation
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createBudgetV1Dto: CreateBudgetV1DTO) {
    return this.budgetV1Service.create(createBudgetV1Dto);
  }
}
