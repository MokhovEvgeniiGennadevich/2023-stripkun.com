import { Module } from '@nestjs/common';
import { BudgetV1Controller } from './budget-v1.controller';
import { BudgetV1Service } from './budget-v1.service';
import BudgetV1Repository from './budget-v1.repository';

@Module({
  imports: [],
  controllers: [BudgetV1Controller],
  providers: [BudgetV1Service, BudgetV1Repository],
})
export class BudgetV1Module {}
