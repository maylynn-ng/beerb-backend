import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findUser(sub: string): Promise<User> {
    return this.userRepository.findOne(sub, {
      relations: ['Location', 'Badge', 'Beer'],
      order: { locations: 'DESC' },
    });
  }

  createUser(userInput: { name: string }): Promise<User> {
    //TODO: check userInput type
    return this.userRepository.save(userInput);
  }
}
