import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  TransactionEnum,
  TransactionCategoryAll,
  type TransactionCategory,
} from 'src/utils/types';
import { User } from 'src/users/users.entity';

@Entity({
  name: 'transactions',
})
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, precision: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: TransactionEnum,
    default: TransactionEnum.Income,
  })
  type: TransactionEnum;

  @Column({
    type: 'enum',
    enum: TransactionCategoryAll,
    nullable: false,
  })
  category: TransactionCategory;

  @Column({ type: 'date' })
  date: Date;

  @Column({ nullable: true, type: 'varchar', length: 220 })
  description: string;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: 'userId' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
