"use client"
import { TDashboardData } from "@/utils/types";
import ExpenseDistributionChart from "./ExpenseDistributionChart";
import SpendByCategoryChart from "./SpendByCategoryChart";

type ExpenseChartsProps = {
  expenseDistribution: TDashboardData["expenseDistribution"];
  spendByCategory: TDashboardData["spendByCategoryArray"];
};

const ExpensesChartsContainer = ({
  expenseDistribution,
  spendByCategory,
}: ExpenseChartsProps) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg">
      <div className="p-3">
        <h3 className="text-base font-medium leading-normal text-black capitalize">Expenses overview</h3>
      </div>
      <div className="p-4 bg-white border-t border-gray-300 rounded-t-md rounded-b-lg grid grid-cols-2 gap-x-8 h-100">
        <SpendByCategoryChart data={spendByCategory} />
        <ExpenseDistributionChart data={expenseDistribution} />
      </div>
    </div>
  );
};

export default ExpensesChartsContainer;
