import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BudgetV1Service } from './budget-v1.service';
import { CreateBudgetV1DTO, GetBudgetPaginationQueryV1DTO } from './budget.dto';
import { Headers } from '@nestjs/common';
import * as crypto from 'crypto';

@Controller('v1/budget')
export class BudgetV1Controller {
  constructor(private readonly budgetV1Service: BudgetV1Service) {}

  @Get('get')
  // Enable validation
  @UsePipes(new ValidationPipe({ transform: true }))
  get(
    @Query() getBudgetPaginationQueryV1DTO: GetBudgetPaginationQueryV1DTO,
    @Headers() headers,
  ) {
    if (!headers.csrf || headers.csrf !== '222') {
      return {
        message: 'Bad request33',
      };
    }

    ///////////////////////////////////////////////////////
    // Check DateTime
    if (!headers.hash_time || Number(headers.hash_time) < Date.now() - 10) {
      // TODO: исправить на то, чтобы брать DEBUG из .ENV
      if (1 === 1) {
        console.error(
          'Budget V1 Controller hash_time',
          headers.hash_time,
          String(Date.now()),
          'Expired',
        );
      }

      return {
        message: 'Bad request',
      };
    }

    const secret = crypto
      .createHmac('sha512', 'password')
      .update('/v1/budget/getpage0limit1' + String(headers.hash_time), 'utf-8')
      .digest('hex');

    if (!headers.hash || headers.hash !== secret) {
      // TODO: исправить на то, чтобы брать DEBUG из .ENV
      if (1 === 1) {
        console.error(
          'Budget V1 Controller hash_time',
          headers.hash_time,
          String(Date.now()),
          'Hash Does not Match',
        );
      }

      return {
        message: 'Bad request',
      };
    }

    // Additional validation
    if (getBudgetPaginationQueryV1DTO.page < 0) {
      return {
        message: 'Bad request',
      };
    }

    if (getBudgetPaginationQueryV1DTO.limit <= 0) {
      return {
        message: 'Bad request',
      };
    }

    return this.budgetV1Service.get(getBudgetPaginationQueryV1DTO);
  }

  @Post('create')
  // Enable validation
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createBudgetV1Dto: CreateBudgetV1DTO) {
    return this.budgetV1Service.create(createBudgetV1Dto);
  }
}
