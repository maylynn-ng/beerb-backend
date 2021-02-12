import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Beer } from '../beer/beer.entity';
import { Badge } from '../badge/badge.entity';
import { Location } from '../location/location.entity';

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

  @ManyToMany(() => Badge)
  @JoinTable()
  badges: Badge[];

  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];
}
