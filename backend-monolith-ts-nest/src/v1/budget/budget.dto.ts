import {
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

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
