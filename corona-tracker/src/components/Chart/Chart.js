import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";

import { Line, Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = props => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/daily")
      .then(res => {
        setDailyData(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(data => {
          return data.reportDate;
        }),
        datasets: [
          {
            data: dailyData.map(data => {
              return data.confirmed.total;
            }),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData.map(data => data.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  const barChart = props.data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [
              props.data.confirmed.value,
              props.data.recovered.value,
              props.data.deaths.value
            ]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${props.country}` }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {props.country !== "global" && props.country !== ""
        ? barChart
        : lineChart}
    </div>
  );
};

export default Chart;
