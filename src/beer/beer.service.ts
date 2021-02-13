import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Beer } from './beer.entity';

@Injectable()
export class BeerService {
  constructor(
    @InjectRepository(Beer)
    private readonly beerRepository: Repository<Beer>,
  ) {}

  findAll(): Promise<Beer[]> {
    try {
      return this.beerRepository.find();
    } catch (err) {
      console.error('err in finding your beers.. ', err);
    }
  }
}
