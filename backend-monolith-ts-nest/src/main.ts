import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  // Create Webserver Instance
  const app = await NestFactory.create(AppModule, { cors: true });

  // Run Webserver
  await app.listen(3001);
}

// Run Main Loop
main();
