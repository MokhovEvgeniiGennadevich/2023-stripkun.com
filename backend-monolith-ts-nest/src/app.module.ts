import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingController } from './v1/ping/ping.controller';
import { PingService } from './v1/ping/ping.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseModule from './database.module';
import { CategoryV1Module } from './v1/category/category-v1.module';
import { BudgetV1Module } from './v1/budget/budget-v1.module';

@Module({
  imports: [
    // Modules
    CategoryV1Module,
    BudgetV1Module,

    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        user: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
  ],
  // imports: [DatabaseModule],
  controllers: [AppController, PingController],
  providers: [AppService, PingService],
})
export class AppModule {}
