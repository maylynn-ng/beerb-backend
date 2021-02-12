import { Controller, Get } from '@nestjs/common';

@Controller('beer')
export class BeerController {
  @Get('beers')
  getBeers(): string {
    return 'these are beers!';
  }
}
