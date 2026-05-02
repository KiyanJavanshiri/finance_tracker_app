import { TDashboardData } from "@/utils/types";
import ExpenseDistributionChart from "./ExpenseDistributionChart";
import SpendByCategoryChart from "./SpendByCategoryChart";

type ExpenseChartsProps = {
  expenseDistribution: TDashboardData["expenseDistribution"];
  spendByCategory: TDashboardData["spendByCategory"];
};

const ExpensesChartsContainer = ({
  expenseDistribution,
  spendByCategory,
}: ExpenseChartsProps) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg">
      <div className="p-3">
        <h3 className="">Expenses overview</h3>
      </div>
      <div className="p-3 bg-white border-t border-gray-300 rounded-t-md rounded-b-lg grid grid-cols-2 gap-x-8">
        <SpendByCategoryChart data={spendByCategory} />
        <ExpenseDistributionChart data={expenseDistribution} />
      </div>
    </div>
  );
};

export default ExpensesChartsContainer;
