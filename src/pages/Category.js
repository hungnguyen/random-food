import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import { connect } from "react-redux";

import { getAllCategory } from "../actions";

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

const Category = ({ category, getAllCategory }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {category.list.Category &&
          category.list.Category.map((item) => {
            return (
              <Grid item md={3}>
                <Link to={`/food/${item._id}`}>
                  <Paper elevation={3}>
                    <Icon color={item.color}>{item.icon}</Icon>
                    <Typography>{item.name}</Typography>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getAllCategory })(Category);
