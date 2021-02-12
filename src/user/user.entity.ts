import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Beer } from '../beer/beer.entity';

@Entity()
export class User {
  @Column({ type: 'varchar', length: 300, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  sub: string;

  @Column({ type: 'array', default: [] })
  favouriteBeers: number[];

  @ManyToMany(() => Beer)
  @JoinTable()
  beers: Beer[];
}
