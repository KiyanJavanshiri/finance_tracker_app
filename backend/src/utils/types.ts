export enum TransactionEnum {
  Income = 'income',
  Expense = 'expense',
}

export enum TransactionCategoryIncome {
  Salary = 'salary',
  Freelance = 'freelance',
  Investment = 'investment',
  Gift = 'gift',
  Other = 'other',
}

export enum TransactionCategoryExpense {
  Food = 'food',
  Transport = 'transport',
  Housing = 'housing',
  Shopping = 'shopping',
  Entertainment = 'entertainment',
  Health = 'health',
  Education = 'education',
}

export const TransactionCategoryAll = {
  ...TransactionCategoryIncome,
  ...TransactionCategoryExpense,
};

export type TransactionCategory =
  | TransactionCategoryIncome
  | TransactionCategoryExpense;

export type TDateRange = 'daily' | 'monthly' | 'yearly';

export type JWTCustomPayload = { id: number; username: string };
