import type { IconType } from "react-icons";

export type TApiResponse<T> = {
  success: string;
  data: T;
};

export type TApiError = {
  message: string;
  status: number;
};

export type TPathLink = {
  name: string;
  path: string;
  Icon: IconType;
};

export type TUser = {
  username: string;
  email: string;
  avatarUrl: string;
};

export type TDashboardData = {
  income: {
    total: number;
    avg: number;
    count: number;
  };
  expense: {
    total: number;
    avg: number;
    count: number;
  };
  savings: {
    total: number;
  };
  savingRate: {
    value: number;
  };
  expenseDistribution: {
    category: string;
    amount: number;
    percent: number;
  }[];
  spendByCategoryArray: { category: string; expense: number }[];
};

type TransactionStatistic = {
  type: "transaction";
  avg: number;
  count: number;
  figure: number;
  section: string;
  Icon: IconType;
};

type DataStatistic = {
  type: "data";
  figure: number;
  section: string;
  Icon: IconType;
};

export enum TransactionEnum {
  Income = "income",
  Expense = "expense",
}

export enum TransactionCategoryIncome {
  Salary = "salary",
  Freelance = "freelance",
  Investment = "investment",
  Gift = "gift",
  Other = "other",
}

export enum TransactionCategoryExpense {
  Food = "food",
  Transport = "transport",
  Housing = "housing",
  Shopping = "shopping",
  Entertainment = "entertainment",
  Health = "health",
  Education = "education",
}

export const TransactionCategoryAll = {
  ...TransactionCategoryIncome,
  ...TransactionCategoryExpense,
};

export type TransactionCategory =
  | TransactionCategoryIncome
  | TransactionCategoryExpense;

export type TOperationType = {
  id: number;
  amount: number;
  type: TransactionEnum;
  category: TransactionCategory;
  date: Date;
  description?: string;
};

export type TStaticticBlock = TransactionStatistic | DataStatistic;
