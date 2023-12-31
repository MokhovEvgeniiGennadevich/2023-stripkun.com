import { Controller, Get, Post } from '@nestjs/common';
import { PingService } from './ping.service';

// Main Route
@Controller('/api/v1/ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  // @Get("sub-route")
  // Sub Route: v1/ping/{sub-route}
  @Get()
  getPing() {
    return this.pingService.getPing();
  }

  @Post()
  postPing() {
    return this.pingService.getPing();
  }
}
