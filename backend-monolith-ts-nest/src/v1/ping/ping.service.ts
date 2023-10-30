import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  getPing() {
    return {
      message: 'pong',
    };
  }
}
