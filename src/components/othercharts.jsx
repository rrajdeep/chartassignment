import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Scatter } from "react-chartjs-2";
import { Bubble } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js"

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PieChart = ({chartData}) => {
//   const labels = ["January", "February", "March", "April", "May", "June"];
const labels = chartData.map(ele => ele.x );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Piechart",
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        data: chartData.map(ele => ele.y),
      },
    ],
  };
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;

export const ScatterChart = ({chartData}) => {
    const labels = chartData.map(ele => ele.x );
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Scatter chart",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(236, 24, 70)",
        data: chartData.map(ele => ele.y),
      },
    ],
  };
  return (
    <div>
        <Scatter data={data} />
    </div>
  )
};

export const BubbleChart = ({chartData}) => {
    const labels = chartData.map(ele => ele.x );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Bubble Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(0,0,255)",
          data: chartData.map(ele => ele.y),
        },
      ],
    };
    return (
        <Bubble data={data} /> 
    )
}


export const DoughnutChart = ({chartData}) => {
    const labels = chartData.map(ele => ele.x );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Doughnut Chart",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          data: chartData.map(ele => ele.y),
        },
      ],
    };
    return (
        <div>
            <Doughnut data={data} />
        </div>
    )
}

export const PolarAreaChart = ({chartData}) => {
    const labels = chartData.map(ele => ele.x );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Polar Area Chart",
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: "rgb(0,0,255)",
          data: chartData.map(ele => ele.y),
        },
      ],
    };
    return (
        <div>
            <PolarArea data={data} />
        </div>
    )
}

export const RadarChart = ({chartData}) => {
    const labels = chartData.map(ele => ele.x );
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Radar Chart",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(0,0,255)",
          data: chartData.map(ele => ele.y),
        },
      ],
    };
    return (
        <div>
            <Radar data={data} />
        </div>
    )
}
