import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { RestaurantMenu, RoomService } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item md={3}>
          <Link to="/category">
            <Paper elevation={3}>
              <RestaurantMenu />
              <Typography>Thực đơn</Typography>
            </Paper>
          </Link>
        </Grid>
        <Grid item md={3}>
          <Link to="/random">
            <Paper elevation={3}>
              <RoomService />
              <Typography>Chọn món</Typography>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
