import { TOperationType, TransactionEnum } from "@/utils/types";

const SwitchTransactionType = ({ type }: { type?: TOperationType["type"] }) => {
  return (
    <div className="flex justify-between items-center gap-x-2 p-2 rounded-md border border-black my-6">
      <label
        htmlFor="type-expense"
        className={`block w-full relative cursor-pointer text-center p-1 rounded-sm text-black ${type === TransactionEnum.Expense ? "bg-gray-400" : "bg-white"} capitalize text-sm leading-normal font-medium text-black`}
      >
        <input
          name="type"
          type="radio"
          id="type-expense"
          value={"expense"}
          className="absolute -z-1 opacity-0"
          defaultValue={type}
        />
        Expense
      </label>
      <label
        htmlFor="type-income"
        className={`block w-full relative cursor-pointer text-center p-1 rounded-sm text-black ${type === TransactionEnum.Income ? "bg-gray-400" : "bg-white"} capitalize text-sm leading-normal font-medium text-black`}
      >
        <input
          name="type"
          type="radio"
          id="type-income"
          value={"income"}
          defaultValue={type}
          className="absolute -z-1 opacity-0"
        />
        Income
      </label>
    </div>
  );
};

export default SwitchTransactionType;
