import { Entity, Column, ManyToMany } from 'typeorm';

@Entity()
export class Badge {
  @Column({ type: 'varchar', length: 300, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  text: string;

  @Column({ type: 'varchar', length: 300, nullable: false })
  image: string;
}
