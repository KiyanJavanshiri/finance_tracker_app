import { TOperationType } from "@/utils/types";

const RecentTransactions = ({
  transactions,
}: {
  transactions: TOperationType[];
}) => {
  console.log(transactions);
  return <div className="">transactions</div>;
};

export default RecentTransactions;
