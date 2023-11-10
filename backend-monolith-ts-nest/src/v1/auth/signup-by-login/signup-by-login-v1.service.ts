import { Body, Injectable, Req, Res } from '@nestjs/common';
import { CreateSignupByLoginV1Dto } from './dto/create-signup-by-login-v1.dto';
import SignupByLoginV1Repository from './signup-by-login-v1.repository';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';

// Business logic

@Injectable()
export class SignupByLoginV1Service {
  constructor(
    private readonly signupByLoginV1Repository: SignupByLoginV1Repository,
    private readonly jwtService: JwtService,
  ) {}

  create(
    @Res({ passthrough: true }) response: Response,
    @Body() createSignupByLoginV1Dto: CreateSignupByLoginV1Dto,
  ) {
    return this.signupByLoginV1Repository.create(
      response,
      createSignupByLoginV1Dto,
    );

    // Create User
    // const user = this.signupByLoginV1Repository.create(
    //   createSignupByLoginV1Dto,
    // );

    // user.then(async (res) => {
    //   if (typeof res.id === 'undefined') {
    //     return user;
    //   }

    //   // Generate JWT Token
    //   const payload = { id: res.id, login: res.login };
    //   const jwtToken = await this.jwtService.signAsync(payload);

    //   // response.cookie('jwt', jwtToken);

    //   if (!jwtToken) {
    //     return {
    //       message: 'server',
    //     };
    //   }
    // });
  }

  // findAll() {
  //   return `This action returns all signupByLoginV1`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} signupByLoginV1`;
  // }

  // update(id: number, updateSignupByLoginV1Dto: UpdateSignupByLoginV1Dto) {
  //   return `This action updates a #${id} signupByLoginV1`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} signupByLoginV1`;
  // }
}
