import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'vehicle', schema: 'public' })
export class Vehicle {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string; 

  @Column({ type: 'text', name: 'vehicleType' })
  vehicleType: string;

  @Column({ type: 'smallint', name: 'fabricationDate' })
  fabricationDate: number;

  @Column({ type: 'text' })
  brand: string;

  @Column({ type: 'bigint', name: 'vehicleGroupId' })
  vehicleGroupId: number;
}
