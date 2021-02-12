import { User } from 'src/user/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Location {
  @Column({ type: 'varchar', length: 300, default: 'Pint' })
  beerName: string;

  @Column({ type: 'integer', default: 0 })
  beerId: number;

  @Column({ type: 'varchar', length: 300, default: 'Pub' })
  placeName: string;

  @Column({ type: 'varchar', length: 300, default: 'Pub' })
  placeId: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  boroughName: string;

  @Column({ type: 'integer', nullable: false })
  boroughId: number;

  @Column({ type: 'decimal', nullable: false })
  longitude: number;

  @Column({ type: 'decimal', nullable: false })
  latitude: number;

  @ManyToOne(() => User, (user) => user.locations)
  user: User;
}
