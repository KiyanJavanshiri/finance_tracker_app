import { actionGetDashboardOverview } from "@/utils/actions/getDashboardOverview";
import { TStaticticBlock } from "@/utils/types";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import StatisticDataBlock from "./components/StatisticDataBlock";
import ExpensesChartsContainer from "./components/ExpenseChartsContainer";

const DashboardContainer = async () => {
  const dashboardOverviewData = await actionGetDashboardOverview();

  if (!dashboardOverviewData) {
    return <p>Something went wrong, try again later</p>;
  }

  const { income, expense, savingRate, expenseDistribution, spendByCategoryArray } =
    dashboardOverviewData;

  console.log("spendByCategoryArray: ", spendByCategoryArray);
  console.log("expenseDistribution: ", expenseDistribution);

  const figuredData: TStaticticBlock[] = [
    {
      type: "transaction",
      avg: expense.avg,
      figure: expense.total,
      section: "expense",
      count: expense.count,
      Icon: FaArrowTrendUp,
    },
    {
      type: "transaction",
      avg: income.avg,
      figure: income.total,
      section: "income",
      count: income.count,
      Icon: FaArrowTrendDown,
    },
    {
      type: "data",
      figure: savingRate.value,
      section: "saving rate",
      Icon: MdSavings,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-y-8 mt-6">
      <ul className="grid grid-cols-3 gap-x-6 ">
        {figuredData.map((data, i) => (
          <li key={i}>
            <StatisticDataBlock data={data} />
          </li>
        ))}
      </ul>
      <ExpensesChartsContainer spendByCategory={spendByCategoryArray} expenseDistribution={expenseDistribution} />
    </div>
  );
};

export default DashboardContainer;
