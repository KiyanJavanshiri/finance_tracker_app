import { TransactionEnum } from "@/utils/types";
import { actionGetTransactions } from "@/utils/actions/transactionActions";
import TransactionsTable from "./components/TransactionsTable";

const TransactionsContainer = async ({
  type,
  page,
}: {
  type: TransactionEnum;
  page: number;
}) => {
  const response = await actionGetTransactions(type, page);

  if (!response) {
    return <p>something went wrong, try again</p>;
  }

  const { transactions, count } = response;

  return (
    <div className="mt-6">
      <TransactionsTable
        operations={transactions}
        type={type}
        totalTransactions={count}
      />
    </div>
  );
};

export default TransactionsContainer;
