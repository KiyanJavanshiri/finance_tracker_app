import { TDashboardData } from "@/utils/types";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Tooltip,
  PieSectorShapeProps,
  PieLabelRenderProps,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import { FaChartPie } from "react-icons/fa";

const RADIAN = Math.PI / 180;
const PIE_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#556270",
  "#C7F464",
  "#C44D58",
  "#FFA07A",
  "#6A5ACD",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: PieLabelRenderProps) => {
  if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
    return null;
  }
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const ncx = Number(cx);
  const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const ncy = Number(cy);
  const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > ncx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent ?? 1).toFixed(0)}%`}
    </text>
  );
};

const CustomPieSector = (props: PieSectorShapeProps) => {
  return (
    <Sector
      {...props}
      fill={
        props.isActive ? "#000000" : PIE_COLORS[props.index % PIE_COLORS.length]
      }
      opacity={props.isActive ? "0.2" : "1"}
    />
  );
};

const ExpenseDistributionChart = ({
  data,
}: {
  data: TDashboardData["expenseDistribution"];
}) => {
  return (
    <div className="w-full h-full p-6 rounded-md shadow-[0_0_10px_rgba(0,0,0,10%)] select-none">
      <div className="flex justify-start items-center gap-x-3 mb-6">
        <div className="p-1 rounded-sm bg-blue-500">
          <FaChartPie className="text-white" />
        </div>
        <h4 className="text-base font-medium leading-normal text-black capitalize">
          Expense Distribution
        </h4>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey={"percent"}
            nameKey={"category"}
            shape={CustomPieSector}
            label={renderCustomizedLabel}
            labelLine={false}
          />
          <Tooltip content={CustomToolTip} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseDistributionChart;
