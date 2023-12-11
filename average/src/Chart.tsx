import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TaskType } from "./App";

export const Chart = ({ data }: { data: TaskType[] }) => {
  const filteredData = data.map((el) => {
    return {
      ...el,
      date: `${new Date(el.date).getDate()}-${new Date(
        el.date
      ).getMonth()}-${new Date(el.date).getFullYear()}`,
    };
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={filteredData}
        margin={{
          top: 5,
          right: 40,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="notCompletedTask"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="completedTask" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
