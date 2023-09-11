import * as React from "react";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 15,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithPaddingAngle({ activeUnits, totalUnits }) {
  // Active units the difference between totalunits and activeunits
  const data = [
    { label: "Active units", value: activeUnits },
    { label: "Units left", value: totalUnits - activeUnits },
  ];

  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 0,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={170}
        height={160}
        legend={{ hidden: true }}
      >
        <PieCenterLabel>Total units : {totalUnits} </PieCenterLabel>
      </PieChart>
    </Stack>
  );
}
