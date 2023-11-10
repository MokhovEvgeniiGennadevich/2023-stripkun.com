import { Module } from '@nestjs/common';
import { UserV1Service } from './user-v1.service';
import { UserV1Controller } from './user-v1.controller';

@Module({
  controllers: [UserV1Controller],
  providers: [UserV1Service],
})
export class UserV1Module {}
