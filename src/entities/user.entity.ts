import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryColumn({ name: 'userId', type: 'bigint' })
  userId: number;

  @Column({ name: 'firstName', type: 'text' })
  firstName: string;

  @Column({ name: 'lastName', type: 'text' })
  lastName: string;

  @Column({ name: 'businessId', type: 'bigint' })
  businessId: number;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'citext', unique: true })
  email: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ name: 'isOwner', default: false })
  isOwner: boolean;

  @CreateDateColumn({ name: 'createdAt', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column()
  passwordHash: string;
}
