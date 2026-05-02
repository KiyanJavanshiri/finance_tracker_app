import { TransactionEnum } from 'src/utils/types';
import { TransactionsService } from './../transactions/transactions.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  constructor(private transactionService: TransactionsService) {}

  async getDashboardOverview(userId: number) {
    const transactions = await this.transactionService.getAllUserTransactions(
      [TransactionEnum.Income, TransactionEnum.Expense],
      userId,
    );

    const incomes = transactions.filter(
      (t) => t.type === TransactionEnum.Income,
    );
    const expenses = transactions.filter(
      (t) => t.type === TransactionEnum.Expense,
    );

    const monthlyIncome = incomes.reduce((ac, c) => ac + c.amount, 0);
    const monthlyExpense = expenses.reduce((ac, c) => ac + c.amount, 0);

    const incomeCount = incomes.length;
    const expenseCount = expenses.length;

    const incomeAvg = incomeCount === 0 ? 0 : monthlyIncome / incomeCount;

    const expenseAvg = expenseCount === 0 ? 0 : monthlyExpense / expenseCount;

    const savings = monthlyIncome - monthlyExpense;
    const savingRate =
      monthlyIncome === 0 ? 0 : Math.round((savings / monthlyIncome) * 100);

    const spendByCategory: Record<string, number> = {};
    for (const exp of expenses) {
      const category = exp.category;
      spendByCategory[category] =
        (spendByCategory[category] || 0) + Number(exp.amount || 0);
    }

    const expenseDistribution = Object.entries(spendByCategory).map(
      ([category, amount]) => ({
        category,
        amount,
        percent:
          monthlyExpense === 0
            ? 0
            : Math.round((amount / monthlyExpense) * 100),
      }),
    );

    return {
      income: {
        total: monthlyIncome,
        avg: incomeAvg,
        count: incomeCount,
      },
      expense: {
        total: monthlyExpense,
        avg: expenseAvg,
        count: expenseCount,
      },
      savings: {
        total: savings,
      },
      savingRate: {
        value: savingRate,
      },
      expenseDistribution,
      spendByCategory,
    };
  }
}
