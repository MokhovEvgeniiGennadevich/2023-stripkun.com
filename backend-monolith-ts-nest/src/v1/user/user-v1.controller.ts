import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserV1Service } from './user-v1.service';
import { CreateUserV1Dto } from './dto/create-user-v1.dto';
import { UpdateUserV1Dto } from './dto/update-user-v1.dto';

@Controller('user-v1')
export class UserV1Controller {
  constructor(private readonly userV1Service: UserV1Service) {}

  @Post()
  create(@Body() createUserV1Dto: CreateUserV1Dto) {
    return this.userV1Service.create(createUserV1Dto);
  }

  @Get()
  findAll() {
    return this.userV1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userV1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserV1Dto: UpdateUserV1Dto) {
    return this.userV1Service.update(+id, updateUserV1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userV1Service.remove(+id);
  }
}
