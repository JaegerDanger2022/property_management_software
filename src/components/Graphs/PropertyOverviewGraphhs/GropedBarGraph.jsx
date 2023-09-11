import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  // Note that the dataset will be a prop for dynamic display of data but its static for no w

  yAxis: [
    {
      label: "Ghana Cedis (GHS)",
    },
  ],
  width: 400,
  height: 220,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "rotate(-90deg) translate(0px, -20px)",
    },
  },
};
const dataset = [
  {
    income: 59,
    expense: 57,
    netProfit: 86,

    month: "Jan",
  },
  {
    income: 50,
    expense: 52,
    netProfit: 78,

    month: "Fev",
  },
  {
    income: 47,
    expense: 53,
    netProfit: 106,

    month: "Mar",
  },
  {
    income: 54,
    expense: 56,
    netProfit: 92,

    month: "Apr",
  },
  {
    income: 57,
    expense: 69,
    netProfit: 92,

    month: "May",
  },
  {
    income: 60,
    expense: 63,
    netProfit: 103,

    month: "June",
  },
  {
    income: 59,
    expense: 60,
    netProfit: 105,
    seoul: 319,
    month: "July",
  },
  {
    income: 65,
    expense: 60,
    netProfit: 106,

    month: "Aug",
  },
  {
    income: 51,
    expense: 51,
    netProfit: 95,

    month: "Sept",
  },
  {
    income: 60,
    expense: 65,
    netProfit: 97,

    month: "Oct",
  },
  {
    income: 67,
    expense: 64,
    netProfit: 76,

    month: "Nov",
  },
  {
    income: 61,
    expense: 70,
    netProfit: 103,

    month: "Dec",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function GropedBarGraph() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "income", label: "Income", valueFormatter },
        { dataKey: "expense", label: "Expense", valueFormatter },
        { dataKey: "netProfit", label: "Net Profit", valueFormatter },
        // { dataKey: "seoul", label: "Seoul", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
}
