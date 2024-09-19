import ReactECharts from "echarts-for-react";

const BarChart = () => {
  const option = {
    title: {
      text: "Monthly Sales Data",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["January", "February", "March", "April", "May", "June", "July"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Sales",
        type: "bar",
        data: [3000, 2000, 3200, 5000, 4200, 3000, 4500],
        itemStyle: {
          color: "rgba(75, 192, 192, 0.6)",
        },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default BarChart;
