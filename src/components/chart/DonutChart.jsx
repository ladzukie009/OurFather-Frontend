import { Box } from "@mui/material";
import ReactECharts from "echarts-for-react";

const DonutChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "-5",
      left: "center",
    },
    series: [
      {
        name: "Status",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "normal",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 2, name: "Completed" },
          { value: 5, name: "Confirmed" },
          { value: 2, name: "Pending" },
          { value: 6, name: "Cancelled" },
          { value: 10, name: "In progress" },
        ],
      },
    ],
  };

  return (
    <Box sx={{ width: "100%", height: { xs: "300px", md: "500px" } }}>
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </Box>
  );
};

export default DonutChart;
