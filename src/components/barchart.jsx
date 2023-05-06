
import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  };

const BarChart = ({chartData}) => {

  const labels = chartData.map(ele => ele.x );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "x values",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData,
      },
    ],
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;