import { Module } from '@nestjs/common';
import { SignupByLoginV1Service } from './signup-by-login-v1.service';
import { SignupByLoginV1Controller } from './signup-by-login-v1.controller';
import SignupByLoginV1Repository from './signup-by-login-v1.repository';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [SignupByLoginV1Controller],
  providers: [SignupByLoginV1Service, SignupByLoginV1Repository],
})
export class SignupByLoginV1Module {}
