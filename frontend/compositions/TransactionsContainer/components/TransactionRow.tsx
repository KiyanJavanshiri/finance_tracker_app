import { formattedDate } from "@/utils/formattedDate";
import { CATEGORY_ICONS } from "@/utils/links";
import { TOperationType } from "@/utils/types";
import { actionDeleteTransaction } from "@/utils/actions/transactionActions";
import { MdEdit, MdDelete } from "react-icons/md";
import Button from "@/components/buttons/Button";

const TransactionRow = ({ transaction }: { transaction: TOperationType }) => {
  const Icon = CATEGORY_ICONS[transaction.category];
  const { month, dayOfMonth, year } = formattedDate(transaction.date);
  return (
    <tr className="not-first:border-t not-first:border-t-gray-200">
      <th className="px-4 py-2 text-sm leading-normal">
        <div className="flex justify-start items-center gap-x-3">
          <div className="p-1 rounded-md bg-blue-500 text-white">
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-normal">{transaction.description}</span>
        </div>
      </th>
      <td className="px-4 py-2 text-sm leading-normal">
        <span>
          {month.slice(0, 3)} {dayOfMonth}, {year}
        </span>
      </td>
      <td className="px-4 py-2 text-sm leading-normal">
        <span className="px-2 py-0.5 inline-block border border-gray-300 bg-gray-200 rounded-sm text-gray-600 font-medium capitalize">
          {transaction.category}
        </span>
      </td>
      <td className="px-4 py-2 text-sm leading-normal">
        <span
          className={`font-medium ${transaction.type === "expense" ? "text-red-500" : "text-green-500"}`}
        >
          {`${transaction.type === "expense" ? "-" : ""}${transaction.amount}$`}
        </span>
      </td>
      <td className="px-4 py-2 text-sm leading-normal">
        <div className="flex justify-start items-center gap-x-2">
          <Button className="rounded-sm p-1 bg-blue-300 hover:bg-blue-500 text-white transition-colors duration-150 ease-in-out">
            <MdEdit className="w-4 h-4" />
          </Button>
          <form action={actionDeleteTransaction}>
            <input type="hidden" value={transaction.id} name="transactionId" />
            <Button
              type="submit"
              className="rounded-sm p-1 bg-red-300 hover:bg-red-500 text-white transition-colors duration-150 ease-in-out"
            >
              <MdDelete className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </td>
    </tr>
  );
};

export default TransactionRow;
