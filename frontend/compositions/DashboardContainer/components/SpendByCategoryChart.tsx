"use client";
import { TDashboardData } from "@/utils/types";
import { FaRegChartBar } from "react-icons/fa";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
} from "recharts";
import CustomToolTip from "./CustomToolTip";

const SpendByCategoryChart = ({
  data,
}: {
  data: TDashboardData["spendByCategoryArray"];
}) => {
  return (
    <div className="w-full h-100 p-6 rounded-md shadow-[0_0_10px_rgba(0,0,0,10%)] select-none">
      <div className="flex justify-start items-center gap-x-3 mb-6">
        <div className="p-1 rounded-sm bg-blue-500">
          <FaRegChartBar className="text-white" />
        </div>
        <h4 className="text-base font-medium leading-normal text-black capitalize">
          Spends by categories
        </h4>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data.slice(0, 5)}
          margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="category"
            tick={{ fontSize: 12 }}
            tickFormatter={(value: string) => `${value[0].toUpperCase()}${value.slice(1)}`} 
            axisLine={false}
            tickLine={false}
          />

          <Tooltip cursor={{ fill: "transparent" }} content={CustomToolTip} />

          <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          <Bar
            dataKey="expense"
            radius={[8, 8, 0, 0]}
            fill="oklch(80.9% 0.105 251.813)"
            isAnimationActive={true}
            activeBar={{fill: "oklch(62.3% 0.214 259.815)"}}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendByCategoryChart;
