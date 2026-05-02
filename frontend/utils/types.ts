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

export type TStaticticBlock = TransactionStatistic | DataStatistic;
