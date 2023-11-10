import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';

export class CreateSignupByLoginV1Dto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  password_confirm: string;

  @IsString()
  @IsNotEmpty()
  csrf: string;

  @IsString()
  @IsNotEmpty()
  hash: string;

  @IsNumber()
  @IsNotEmpty()
  hash_time: number;
}

// User: Create: Response

export class CreateSignupByLoginResponseV1Dto {
  id: string;
  login: string;
}
