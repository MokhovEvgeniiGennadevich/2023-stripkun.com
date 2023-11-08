import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class CategoryUpdateV1DTO {
  @IsUUID()
  @IsNotEmpty()
  id: UUID;

  @IsString()
  @IsNotEmpty()
  name: string;

  pid: string | null;
}

// Category: Create

export class CreateCategoryV1DTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  pid: string;
}

// Category: Create: Response

export class CreateCategoryResponseV1DTO {
  @IsUUID()
  @IsNotEmpty()
  id: UUID;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  pid: string;
}
