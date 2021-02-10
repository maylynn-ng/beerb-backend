import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { BeerController } from './beer/beer.controller';
import { LocationController } from './location/location.controller';

@Module({
  imports: [],
  controllers: [AppController, BeerController, LocationController],
  providers: [AppService],
})
export class AppModule {}
