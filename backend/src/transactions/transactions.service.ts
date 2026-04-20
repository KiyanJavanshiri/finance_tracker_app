import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transactions.entity';
import { Between, In, Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TDateRange, TransactionEnum } from 'src/utils/types';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private TransactionsRepository: Repository<Transaction>,
  ) {}

  async createTranscation(dto: CreateTransactionDto) {
    const transaction = this.TransactionsRepository.create(dto);
    return await this.TransactionsRepository.save(transaction);
  }

  async getAllUserTransactions(types: TransactionEnum[], userId: number) {
    const transactions = await this.TransactionsRepository.find({
      where: {
        user: {
          id: userId,
        },
        type: In(types),
      },
    });
    return transactions;
  }

  async getTransactionsOverview(
    type: TransactionEnum,
    range: TDateRange,
    userId: number,
  ) {
    const transactions = await this.TransactionsRepository.find({
      where: {
        user: {
          id: userId,
        },
        type,
        date: Between()
      },
      order: {
        date: 'DESC',
      },
    });

    const totalAmount = transactions.reduce((ac, c) => ac + c.amount, 0);
    const numberOfTransactions = transactions.length;
    const averageAmount = totalAmount / numberOfTransactions;
    const recentTransactions = transactions.slice(0, 5);

    return {
      type,
      totalAmount,
      averageAmount,
      recentTransactions,
    };
  }

  async deleteTransactionById(transactionId: number, userId: number) {
    const transaction = await this.TransactionsRepository.findOne({
      where: {
        user: {
          id: userId,
        },
        id: transactionId,
      },
    });

    if (!transaction) {
      throw new NotFoundException(
        `Transaction with id ${transactionId} was not found`,
      );
    }

    await this.TransactionsRepository.remove(transaction);
  }
}
