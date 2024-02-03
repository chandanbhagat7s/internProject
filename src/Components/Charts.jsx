import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart({ weekdata }) {
  const uData = Object.values(weekdata.previousWeek);
  const pData = Object.values(weekdata.currentweek);
  const xLabels = Object.keys(weekdata.currentweek);
  return (
    <BarChart
      width={700}
      height={500}
      series={[
        { data: pData, label: "current week", id: "pvId" },
        { data: uData, label: "previous week", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
