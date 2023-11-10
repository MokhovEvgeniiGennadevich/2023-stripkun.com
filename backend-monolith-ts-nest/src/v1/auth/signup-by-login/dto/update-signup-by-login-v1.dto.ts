import { PartialType } from '@nestjs/mapped-types';
import { CreateSignupByLoginV1Dto } from './create-signup-by-login-v1.dto';

export class UpdateSignupByLoginV1Dto extends PartialType(CreateSignupByLoginV1Dto) {}
