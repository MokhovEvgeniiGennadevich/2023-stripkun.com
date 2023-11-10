import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  // Create Webserver Instance
  const app = await NestFactory.create(AppModule);

  // Global Preffix
  app.setGlobalPrefix('api');

  // Global Validation Pipe
  app.useGlobalPipes(new ValidationPipe());

  // CORS
  app.enableCors({
    credentials: true,
    origin: 'http://localhost:5000',
  });

  // Cookie Parser
  app.use(cookieParser());

  // Middleware
  // app.use(logger);

  // Run Webserver
  await app.listen(3001, '0.0.0.0');
}

// Run Main Loop
main();
