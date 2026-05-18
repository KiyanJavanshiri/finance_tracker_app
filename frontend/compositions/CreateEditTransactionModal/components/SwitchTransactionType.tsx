"use client";
import { TOperationType, TransactionEnum } from "@/utils/types";

const SwitchTransactionType = ({
  type,
  handleSwitchType,
}: {
  type?: TOperationType["type"];
  handleSwitchType: (type: TransactionEnum) => void;
}) => {
  return (
    <div className="flex justify-between items-center gap-x-2 p-2 rounded-md border border-gray-300 my-6">
      <input name="type" type="hidden" value={type} />
      <label
        htmlFor="type-expense"
        className={`block w-full relative cursor-pointer text-center p-1 rounded-sm text-black ${type === TransactionEnum.Expense ? "bg-gray-200" : "bg-white"} capitalize text-sm leading-normal font-medium text-black`}
        onClick={() => handleSwitchType(TransactionEnum.Expense)}
      >
        Expense
      </label>
      <label
        htmlFor="type-income"
        className={`block w-full relative cursor-pointer text-center p-1 rounded-sm text-black ${type === TransactionEnum.Income ? "bg-gray-200" : "bg-white"} capitalize text-sm leading-normal font-medium text-black`}
        onClick={() => handleSwitchType(TransactionEnum.Income)}
      >
        Income
      </label>
    </div>
  );
};

export default SwitchTransactionType;
