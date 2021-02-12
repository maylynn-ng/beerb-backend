import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class Beer {
  @Column({ type: 'integer', nullable: false })
  beerId: number;

  @Column({ type: 'varchar', length: 300, nullable: false })
  beerName: string;

  @Column({ type: 'text', nullable: false })
  beerLabel: string;

  @Column({ type: 'float', nullable: false })
  beerAbv: number;

  @Column({ type: 'float', nullable: false })
  beerIbu: number;

  @Column({ type: 'text', nullable: false })
  beerDescription: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  breweryName: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  breweryCountry: string;

  @Column({ type: 'text', nullable: false })
  breweryLabel: string;

  @Column({ type: 'text', nullable: false })
  breweryUrl: string;
}
