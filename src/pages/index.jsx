import React, { useState, useRef } from "react";
import LineChart from "@/components/linechart";
import BarChart from "@/components/barchart";
import PieChart, {ScatterChart, BubbleChart, DoughnutChart, PolarAreaChart, RadarChart} from "@/components/othercharts";

export default function Home() {
  const formRef = useRef();
  const [activeChart, setActiveChart] = useState("linechart");
  const [chartData, setChartData] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
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


  const handleReset = () => {
    setChartData([
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ]);
    setActiveChart("linechart");
    formRef.current.reset();
    console.log(chartData)
  }

  return (
    <>
      <div className="main">
        <div className="intro">
          <h3>Demo Chart Assignment</h3>
          <p>Please enter the <b>x - axis</b> and <b>y - axis</b> values </p>
        </div>
        <div className="grid">
          <div className="item1">
            <form action="" ref={formRef} onSubmit={(e) => handleSubmit(e)}>
              <div className="x-axis-values">x - values 
                {
                  chartData.map((item, id) => {
                    return (
                      <input key={id} type="number" name={`x${id+1}`} value={chartData.x} required />
                    )
                  })
                }
              </div>
              <div className="y-axis-values"> y - values 
              {
                chartData.map((item, id) => {
                    return (
                      <input key={id} type="number" name={`y${id+1}`} value={chartData.y} required />
                    )
                  })
              }
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
              <button className="reset" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


