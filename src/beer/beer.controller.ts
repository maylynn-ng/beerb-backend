import { Controller, Get, Post, Put, Body } from '@nestjs/common';

@Controller('beer')
export class BeerController {
  //TODO: talk about naming conventions: routes/controllers
  @Get('beers')
  getBeers(): string {
    return 'these are beers!';
  }

  @Get('searchBeer/:id')
  searchBeer(): string {
    return 'find beer from param.id';
  }

  @Get('discover')
  getRandomBeer(): string {
    return 'find one random beer';
  }

  @Post('drunkBeers') //TODO: change to camel case on frontend?
  getDrunkBeers(@Body() beerIdArray: number[]): string {
    return 'map array to find beers';
  }

  @Put('favourite')
  putNewFavourite(
    @Body() body: { UserId: number; favouriteBeers: number[] },
  ): string {
    return 'update user with beer';
  }
}
