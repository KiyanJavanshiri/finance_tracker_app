import { TransactionEnum } from "@/utils/types";
import { actionGetTransactions } from "@/utils/actions/transactionActions";
import TransactionRow from "./components/TransactionRow";

const SECTIONS = ["Description", "Date", "Category", "Amount", "Actions"];

const TransactionsContainer = async ({ type }: { type: TransactionEnum }) => {
  const transactions = await actionGetTransactions(type);

  if (!transactions) {
    return <p>something went wrong, try again</p>;
  }

  return (
    <div className="mt-6">
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100 border border-gray-200">
          <tr className="border-gray-200">
            {SECTIONS.map((section, i) => (
              <th
                className="px-4 py-2 text-left text-sm font-semibold text-gray-500 leading-normal"
                key={i}
              >
                {section}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsContainer;
