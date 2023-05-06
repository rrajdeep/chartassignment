import React, { useState } from "react";
import LineChart from "@/components/linechart";
import BarChart from "@/components/barchart";
import PieChart, {ScatterChart, BubbleChart, DoughnutChart, PolarAreaChart, RadarChart} from "@/components/othercharts";

export default function Home() {
  const [activeChart, setActiveChart] = useState("");
  const [chartData, setChartData] = useState([
    { x: 50, y: 7 },
    { x: 60, y: 8 },
    { x: 70, y: 9 },
    { x: 80, y: 6 },
    { x: 90, y: 5 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChartData([
      {x:e.target[0].value , y: e.target[5].value},
      {x:e.target[1].value , y: e.target[6].value},
      {x:e.target[2].value , y: e.target[7].value},
      {x:e.target[3].value , y: e.target[8].value},
      {x:e.target[4].value , y: e.target[9].value},
    ])
  };

  return (
    <>
      <div className="main">
        <div className="intro">
          <h3>Demo Chart Assignment</h3>
          <p>Please enter the <b>x - axis</b> and <b>y - axis</b> values </p>
        </div>
        <div className="grid">
          <div className="item1">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div className="x-axis-values">x - values 
                <input type="number" name="x1" required />
                <input type="number" name="x2" required />
                <input type="number" name="x3" required />
                <input type="number" name="x4" required />
                <input type="number" name="x5" required />
              </div>
              <div className="y-axis-values"> y - values 
              <input type="number" name="y1" required  />
              <input type="number" name="y2" required  />
              <input type="number" name="y3" required  />
              <input type="number" name="y4" required  />
              <input type="number" name="y5" required  />
              </div>
              <input type="submit" className="submit-btn" value="Submit" />
            </form>
          </div>
          <div className="item2">
            <div className="chartDiv">
            {activeChart === "linechart" ? <LineChart chartData={chartData}></LineChart> : ""}
            {activeChart === "barchart" ? <BarChart chartData={chartData}></BarChart> : ""}
            {activeChart === "piechart" ? <PieChart chartData={chartData}></PieChart> : ""}
            {activeChart === "scatter" ? <ScatterChart chartData={chartData}></ScatterChart> : ""}
            {activeChart === "bubble" ? <BubbleChart chartData={chartData}></BubbleChart> : ""}
            {activeChart === "doughnut" ? <DoughnutChart chartData={chartData}></DoughnutChart> : ""}
            {activeChart === "polar" ? <PolarAreaChart chartData={chartData}></PolarAreaChart> : ""}
            </div>
          </div>
          <div className="item3">
            <div className="chart-buttons">
              <button onClick={() => setActiveChart("linechart")}>
                Line chart
              </button>
              <button onClick={() => setActiveChart("barchart")}>
                Bar chart
              </button>
              <button onClick={() => setActiveChart("piechart")}>
                Pie chart
              </button>
              <button onClick={() => setActiveChart("scatter")}>
                Scatter chart
              </button>
              <button onClick={() => setActiveChart("doughnut")}>
                Doughnut chart
              </button>
              <button onClick={() => setActiveChart("polar")}>
                Polar Area chart
              </button>
              <button className="reset" onClick={() => setActiveChart("")}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


