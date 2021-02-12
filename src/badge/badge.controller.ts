import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class BadgeController {
  @Get('getBadges')
  getBadges(): string {
    return 'find all badges';
  }

  @Post('inputBadges')
  inputBadges(@Body() badge: { badgeObject: string }): string {
    return 'create new badge';
  }

  @Post('awardBadge')
  postNewBadge(@Body() body: { UserId: number; badge: string }): string {
    return 'add user to this badge';
  }
}
