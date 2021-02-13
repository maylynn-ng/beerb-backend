import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    private userService: UserService,
  ) {}

  async getLocations(): Promise<Location[]> {
    try {
      const userInfo = await this.userService.findUser(req.body.sub);
    } catch (err) {
      console.error('error fetching locations.. ', err);
    }
  }
}
