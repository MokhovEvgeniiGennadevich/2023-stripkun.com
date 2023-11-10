import { Test, TestingModule } from '@nestjs/testing';
import { UserV1Controller } from './user-v1.controller';
import { UserV1Service } from './user-v1.service';

describe('UserV1Controller', () => {
  let controller: UserV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserV1Controller],
      providers: [UserV1Service],
    }).compile();

    controller = module.get<UserV1Controller>(UserV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
