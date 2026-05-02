import { TStaticticBlock } from "@/utils/types";

const StatisticDataBlock = ({ data }: { data: TStaticticBlock }) => {
  const { Icon, figure, section } = data;

  return (
    <div className="border bg-gray-100 border-gray-300 rounded-lg">
      <div className="p-3 flex justify-start items-center gap-x-2">
        <div className="p-1 rounded-md bg-blue-500">
          <Icon className="text-white w-4 h-4" />
        </div>
        <p className="font-medium leading-normal text-black text-sm capitalize">
          {section}
        </p>
      </div>
      <div className="border-t bg-white border-gray-300 rounded-t-sm rounded-b-lg">
        <div className="p-3">
          <p className="font-semibold text-xl leading-normal text-black">
            {section === "saving rate"
              ? `${figure}%`
              : new Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                }).format(figure)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {data.type === "transaction"
              ? `Avg: 
                    ${new Intl.NumberFormat("en-US", {
                      currency: "USD",
                      style: "currency",
                    }).format(data.avg)} 
                    • ${data.count} txns`
              : `${figure < 0 ? "Spent more than you earned" : "Of total income saved"}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatisticDataBlock;
