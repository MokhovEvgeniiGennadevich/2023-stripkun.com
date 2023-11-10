import { Test, TestingModule } from '@nestjs/testing';
import { SignupByLoginV1Controller } from './signup-by-login-v1.controller';
import { SignupByLoginV1Service } from './signup-by-login-v1.service';

describe('SignupByLoginV1Controller', () => {
  let controller: SignupByLoginV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignupByLoginV1Controller],
      providers: [SignupByLoginV1Service],
    }).compile();

    controller = module.get<SignupByLoginV1Controller>(SignupByLoginV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
