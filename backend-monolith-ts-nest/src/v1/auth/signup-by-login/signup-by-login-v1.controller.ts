import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { SignupByLoginV1Service } from './signup-by-login-v1.service';
import { CreateSignupByLoginV1Dto } from './dto/create-signup-by-login-v1.dto';
import { Response } from 'express';

@Controller('/v1/auth/sign-up-by-login')
export class SignupByLoginV1Controller {
  constructor(
    private readonly signupByLoginV1Service: SignupByLoginV1Service,
  ) {}

  // User: Sign Up By Login
  @Post()
  create(
    @Res({ passthrough: true }) response: Response,
    @Body()
    createSignupByLoginV1Dto: CreateSignupByLoginV1Dto,
  ) {
    return this.signupByLoginV1Service.create(
      response,
      createSignupByLoginV1Dto,
    );
  }

  // @Get()
  // findAll() {
  //   return this.signupByLoginV1Service.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.signupByLoginV1Service.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSignupByLoginV1Dto: UpdateSignupByLoginV1Dto,
  // ) {
  //   return this.signupByLoginV1Service.update(+id, updateSignupByLoginV1Dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.signupByLoginV1Service.remove(+id);
  // }
}
