import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChart = ({chartData}) => {
    
    const labels = chartData.map(ele => ele.x );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "value of x",
          backgroundColor: 'rgba(255, 99, 132, 1)',
          borderColor: 'rgba(255,99,132,0.5)',
          data: chartData,
        },
      ],
    };


  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
