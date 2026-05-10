"use client";
import { TOperationType, TransactionEnum } from "@/utils/types";
import { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";
import Link from "next/link";
import TransactionsSortDropdown from "./TransactionsSortDropdown";
import PaginationBar from "./PaginationBar";

const SECTIONS = ["Description", "Date", "Category", "Amount", "Actions"];

const TransactionsTable = ({
  operations,
  type,
  totalTransactions,
}: {
  operations: TOperationType[];
  type: TransactionEnum;
  totalTransactions: number;
}) => {
  const [sortType, setSortType] = useState<"DESC" | "ASC">("DESC");
  const [transactions, setTransactions] =
    useState<TOperationType[]>(operations);

  const handleChangeSort = (type: "DESC" | "ASC") => {
    setSortType(type);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTransactions(() =>
      [...operations].sort((a, b) =>
        sortType === "DESC" ? b.amount - a.amount : a.amount - b.amount,
      ),
    );
  }, [operations, sortType]);

  return (
    <div>
      <div className="border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-center items-center">
            <Link
              className={`px-3 py-1 rounded-l-sm font-medium text-sm text-black border border-gray-300 transition-colors duration-150 ease-in-out hover:bg-gray-300 ${type === TransactionEnum.Income ? "bg-gray-300" : "bg-gray-200"}`}
              href={`/transactions?type=income`}
            >
              Income
            </Link>
            <Link
              className={`px-2 py-1 rounded-r-sm font-medium text-sm text-black  border border-gray-300 transition-colors duration-150 ease-in-out hover:bg-gray-300 ${type === TransactionEnum.Expense ? "bg-gray-300" : "bg-gray-200"}`}
              href={`/transactions?type=expense`}
            >
              Expense
            </Link>
          </div>
          <TransactionsSortDropdown
            type={sortType}
            handleChangeSort={handleChangeSort}
          />
        </div>
        <table className="w-full ">
          <thead className="bg-gray-100 border-y border-gray-200">
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
      <div className="mt-6">
        <PaginationBar totalTransactions={totalTransactions} />
      </div>
    </div>
  );
};

export default TransactionsTable;
