import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';

// Main Route
@Controller('v1/ping')
export class PingController {
  constructor(private readonly pingService: PingService) {}

  // @Get("sub-route")
  // Sub Route: v1/ping/{sub-route}
  @Get()
  getPing() {
    return this.pingService.getPing();
  }
}
