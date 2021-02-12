import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('beer')
export class BeerController {
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

  @Post('drunkbeers')
  getDrunkBeers(@Body() beerIdArray: number[]): string {
    return 'map array to find beers';
  }

  @Post('favourite')
  putNewFavourite(
    @Body() body: { UserId: number; favouriteBeers: number[] },
  ): string {
    return 'update user with beer';
  }
}
