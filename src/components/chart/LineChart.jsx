import ReactECharts from "echarts-for-react";

const LineChart = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 960],
        type: "line",
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default LineChart;
