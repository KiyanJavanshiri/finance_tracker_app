export enum TransactionEnum {
  Income = 'income',
  Expense = 'expense',
}

export type TDateRange = 'daily' | 'monthly' | 'yearly';

export type JWTCustomPayload = { id: number; username: string };
