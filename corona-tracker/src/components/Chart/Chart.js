import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";

import { Line, Bar } from "react-chartjs-2";
import axios from "axios";

const Chart = () => {
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

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
