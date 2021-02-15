import { Body, Controller, Post } from '@nestjs/common';

@Controller('location')
export class LocationController {
  @Post('location')
  postLocation(
    @Body() body: { UserId: number; location: {}; beer: number },
  ): string {
    return 'create location, set user to the beer';
  }

  @Post('locations')
  getLocations(@Body() body: { sub: string }): string {
    return 'find user info or create user';
  }
}
