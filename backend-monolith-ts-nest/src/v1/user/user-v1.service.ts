import { Injectable } from '@nestjs/common';
import { CreateUserV1Dto } from './dto/create-user-v1.dto';
import { UpdateUserV1Dto } from './dto/update-user-v1.dto';

@Injectable()
export class UserV1Service {
  create(createUserV1Dto: CreateUserV1Dto) {
    return 'This action adds a new userV1';
  }

  findAll() {
    return `This action returns all userV1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userV1`;
  }

  update(id: number, updateUserV1Dto: UpdateUserV1Dto) {
    return `This action updates a #${id} userV1`;
  }

  remove(id: number) {
    return `This action removes a #${id} userV1`;
  }
}
