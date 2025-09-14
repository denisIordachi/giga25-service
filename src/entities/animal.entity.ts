import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'animal' })
export class Animal {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ type: 'text' })
  species: string;

  @Column({ type: 'text' })
  sex: string;

  @Column({ name: 'birthDate', type: 'timestamp', nullable: true })
  birthDate?: Date;

  @Column({ name: 'cattleId', type: 'bigint' })
  cattleId: string;
}
