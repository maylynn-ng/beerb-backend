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
      return this.beerRepository.find({
        //order by random not supported by typeORM
        take: 50,
      });
    } catch (err) {
      console.error('err in finding your beers.. ', err);
    }
  }

  async getDrunkBeers(body: { beers: number[] }): Promise<Beer[]> {
    try {
      return await Promise.all(
        body.beers.map(async (id) => {
          const [beer] = await this.beerRepository.find({
            where: { beerId: id },
            select: ['beerId', 'beerName', 'beerLabel'],
          });
          return beer;
        }),
      );
    } catch (err) {
      console.error('error in fetching beers..', err);
    }
  }
}
