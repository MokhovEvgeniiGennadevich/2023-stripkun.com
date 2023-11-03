import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class CategoryUpdateDTO {
  @IsUUID()
  @IsNotEmpty()
  id: UUID;

  @IsString()
  @IsNotEmpty()
  name: string;
}
