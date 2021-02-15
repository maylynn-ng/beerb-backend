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

  async getLocations(body): Promise<Location[]> {
    //TODO: double check should this be returning locations or user?
    try {
      const userInfo = await this.userService.findUser(body.sub);
      if (!userInfo) {
        const newUser = await this.userService.createUser(body);
        // newUser.dataValues['Locations'] = [];
        // newUser.dataValues['Badges'] = [];
        // newUser.dataValues['Beers'] = [];
        return newUser.locations;
      } else return userInfo.locations;
    } catch (err) {
      console.error('error fetching locations.. ', err);
    }
  }
}
