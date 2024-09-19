import ReactECharts from "echarts-for-react";

const PieChart = () => {
  const option = {
    title: {
      text: "Latest Loan",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Percentage",
        type: "pie",
        radius: "70%",
        data: [
          { value: "70", name: "Paid" },
          { value: "30", name: "Not Paid" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default PieChart;
