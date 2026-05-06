import { TOperationType } from "@/utils/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import RecentTransactionItem from "./RecentTransactionItem";

const RecentTransactions = ({
  transactions,
}: {
  transactions: TOperationType[];
}) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg">
      <div className="p-3 flex justify-between items-center">
        <h3 className="text-base font-medium leading-normal text-black capitalize">
          Last 5 transaction
        </h3>
        <Link
          href={"/transactions"}
          className="p-1 rounded-sm bg-white hover:bg-gray-50 border border-gray-200"
        >
          <FaExternalLinkAlt className="text-gray-400" />
        </Link>
      </div>
      <div className="p-4 bg-white border-t border-gray-300 rounded-t-md rounded-b-lg">
        <ul className="w-full">
          {transactions.map((transaction) => (
            <li className="w-full py-2 not-first:border-t not-first:border-t-gray-300" key={transaction.id}>
              <RecentTransactionItem transaction={transaction} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentTransactions;
