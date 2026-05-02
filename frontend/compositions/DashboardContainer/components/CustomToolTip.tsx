import { TooltipContentProps } from "recharts";

const CustomToolTip = ({ active, payload, label }: TooltipContentProps) => {
  const isVisible = active && payload && payload.length;
  console.log(payload)
  return (
    isVisible && (
      <div className="p-2 rounded-md bg-white shadow-[0_0_10px_rgba(0,0,0,10%)] ">
        <p className="mb-1 text-sm leading-normal font-normal text-gray-600">
          Option: {label}
        </p>
        <p className="text-sm leading-normal font-normal text-gray-600">
          Expenses: {payload[0].value}
        </p>
      </div>
    )
  );
};

export default CustomToolTip;
