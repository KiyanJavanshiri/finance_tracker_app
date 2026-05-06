import { formattedDate } from "@/utils/formattedDate";
import { CATEGORY_ICONS } from "@/utils/links";
import { TOperationType } from "@/utils/types";

const RecentTransactionItem = ({
  transaction,
}: {
  transaction: TOperationType;
}) => {
  const Icon = CATEGORY_ICONS[transaction.category];
  const { dayOfMonth, month, year, time } = formattedDate(transaction.date);
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-x-4">
        <div className="p-2 rounded-sm bg-blue-500">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="leading-normal text-base font-medium text-black">
            {transaction.description}
          </p>
          <p className="leading-normal text-sm font-normal text-gray-400">
            {transaction.type} • {dayOfMonth} {month.slice(0, 4)} {year}, {time}
          </p>
        </div>
      </div>
      <p
        className={`leading-normal text-base font-medium ${transaction.type === "expense" ? "text-red-500" : "text-green-500"}`}
      >
        {`${transaction.type === "expense" ? "-" : ""}${transaction.amount}$`}
      </p>
    </div>
  );
};

export default RecentTransactionItem;
