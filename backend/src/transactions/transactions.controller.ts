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
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import type {
  TDateRange,
  TransactionEnum,
  JWTCustomPayload,
} from 'src/utils/types';
import type { Request as TRequest } from 'express';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { QueryTransformPipe } from 'src/pipes/query-transform.pipe';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  async getAllUserTransactions(
    @Query('types', QueryTransformPipe) types: TransactionEnum[],
    @Request() req: TRequest,
  ) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    return await this.transactionsService.getAllUserTransactions(types, userId);
  }

  @Get('overview')
  async getTransactionsOverview(
    @Query('type') type: TransactionEnum,
    @Query('range') range: TDateRange,
    @Request() req: TRequest,
  ) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    return await this.transactionsService.getTransactionsOverview(
      type,
      range,
      userId,
    );
  }

  @Get(':id')
  async getTransactionById(
    @Param('id', ParseIntPipe) transactionId: number,
    @Request() req: TRequest,
  ) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    return this.transactionsService.getTransactionById(transactionId, userId);
  }

  @Post('create')
  async createTransaction(
    @Body() dto: CreateTransactionDto,
    @Request() req: TRequest,
  ) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    return await this.transactionsService.createTransaction(dto, userId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTransactionById(
    @Param('id', ParseIntPipe) transactionId: number,
    @Request() req: TRequest,
  ) {
    const userId = (req as TRequest & { user: JWTCustomPayload }).user.id;
    await this.transactionsService.deleteTransactionById(transactionId, userId);
  }
}
