"use client"
import { TDashboardData } from "@/utils/types";
import { BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Bar } from "recharts";

const SpendByCategoryChart = ({
  data,
}: {
  data: TDashboardData["spendByCategory"];
}) => {
  const formattedData: Record<string, number>[] = [];

  for (const key in data) {
    formattedData.push({ [key]: data[key] });
  }

  return (
    <div className="">
      <h4>Spends by categories</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData}>
          <XAxis dataKey={"name"} />
          <YAxis />
          <CartesianGrid strokeDasharray={"3 3"}/>
          <Legend/>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendByCategoryChart;
