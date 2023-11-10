import {
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';

export class GetBudgetPaginationQueryV1DTO {
  @IsNumberString()
  @IsNotEmpty()
  // @IsPositive()
  page: number;

  @IsNumberString()
  @IsNotEmpty()
  limit;
}

export class GetBudgetPaginationResponseV1DTO {
  total: number;
  page: number;
  data: GetBudgetPaginationResponseDataV1DTO[];
}

export class GetBudgetPaginationResponseDataV1DTO {
  id: UUID;
  summ: number;
  categoryId: UUID;
  date: Date;
  note: string;
}

export class CreateBudgetV1DTO {
  @IsInt()
  @IsNotEmpty()
  summ: number;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  note: string;
}
