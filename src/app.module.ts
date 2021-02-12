import { Module } from '@nestjs/common';
import { BadgeController } from './badge/badge.controller';
import { BeerController } from './beer/beer.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PSQL } from './config';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: PSQL.host,
      port: PSQL.port,
      username: PSQL.username,
      password: PSQL.password,
      database: PSQL.name,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [BadgeController, BeerController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
