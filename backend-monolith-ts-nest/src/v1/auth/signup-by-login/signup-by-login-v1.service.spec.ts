import { Test, TestingModule } from '@nestjs/testing';
import { SignupByLoginV1Service } from './signup-by-login-v1.service';

describe('SignupByLoginV1Service', () => {
  let service: SignupByLoginV1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignupByLoginV1Service],
    }).compile();

    service = module.get<SignupByLoginV1Service>(SignupByLoginV1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
