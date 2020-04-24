import React from "react";
import styles from "./Cards.module.css";

import CountUp from "react-countup";

//Mui imports
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { StylesContext } from "@material-ui/styles";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  console.log("props", confirmed, deaths, recovered, lastUpdate);

  return (
    <div className={StylesContext.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed ? confirmed.value : 0} />
            </Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered ? recovered.value : 0} />
            </Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of recovered cases from COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths ? deaths.value : 0} />
            </Typography>
            <Typography color="textSecondary">Date</Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
