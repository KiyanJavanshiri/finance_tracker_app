import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Body,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import type { TDateRange, TransactionEnum } from 'src/utils/types';
import type { Request as TRequest } from 'express';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get('all')
  async getAllUserTransactions(
    @Query('types') types: TransactionEnum[],
    @Request() req: TRequest,
  ) {
    const userId = req.user.id as number;
    return await this.transactionsService.getAllUserTransactions(types, userId);
  }

  @Get('overview')
  async getTransactionsOverview(
    @Query('type') type: TransactionEnum,
    @Query('range') range: TDateRange,
    @Request() req: TRequest,
  ) {
    const userId = req.user.id as number;
    return await this.transactionsService.getTransactionsOverview(
      type,
      range,
      userId,
    );
  }

  @Post('create')
  async createTransaction(@Body() dto: CreateTransactionDto) {
    const userId = req.user.id as number;
    return await this.transactionsService.createTransaction(dto, userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTransactionById(
    @Param('id', ParseIntPipe) transactionId: number,
    @Request() req: TRequest,
  ) {
    const userId = req.user.id as number;
    await this.transactionsService.deleteTransactionById(transactionId, userId);
  }
}
