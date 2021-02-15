import { Body, Controller, Post } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('location')
  postLocation(
    @Body() body: { UserId: number; location: {}; beer: number },
  ): string {
    return 'create location, set user to the beer';
  }

  @Post('locations')
  getLocations(@Body() body: { sub: string }): Promise<Location[]> {
    return this.locationService.getLocations(body);
  }
}
