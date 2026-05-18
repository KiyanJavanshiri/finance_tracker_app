import axios from "axios";
import { cookies } from "next/headers";
import { TApiResponse, TDashboardData, TOperationType } from "../types";

export const actionGetDashboardOverview = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const response = await axios.get<TApiResponse<TDashboardData>>(
      `${process.env.API_URL}/dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data;
  } catch (error) {
    return undefined;
  }
};

export const actionGetRecentTransactions = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const response = await axios.get<TApiResponse<{transactions: TOperationType[]; count: number}>>(
      `${process.env.API_URL}/transactions?types=income,expense&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.data.transactions;
  } catch {
    return undefined;
  }
};
