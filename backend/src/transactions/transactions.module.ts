import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { User } from 'src/users/users.entity';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, User])],
  providers: [TransactionsService],
  controllers: [TransactionsController],
  exports: [TransactionsService],
})
export class TransactionsModule {}
