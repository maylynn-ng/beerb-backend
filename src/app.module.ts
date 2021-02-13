import { Module } from '@nestjs/common';
import { BadgeController } from './badge/badge.controller';
import { BeerController } from './beer/beer.controller';
import { LocationController } from './location/location.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { LocationService } from './location/location.service';
import { BeerService } from './beer/beer.service';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [BadgeController, BeerController, LocationController],
  providers: [AppService, LocationService, BeerService, UserService],
})
export class AppModule {}
