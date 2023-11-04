import { IsDate, IsInt, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateBudgetDtoV1 {
  @IsInt()
  @IsNotEmpty()
  summ: number;

  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @IsDate()
  @IsNotEmpty()
  date: string;

  @IsString()
  note: string;
}
