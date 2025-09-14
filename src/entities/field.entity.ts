import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('field')
export class Field {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  cropType: string;

  @Column({ type: 'jsonb' })
  coords: object[];

  @Column('numeric', { precision: 10, scale: 2 })
  size: number;

  @Column({ type: 'text', nullable: true })
  soilType?: string;

  @Column({ type: 'text', nullable: true })
  fertiliser?: string;

  @Column({ type: 'text', nullable: true })
  herbicide?: string;

  @Column({ type: 'bigint' })
  businessId: number;
}
