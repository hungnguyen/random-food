import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  CircularProgress,
  Snackbar,
  Paper,
  Slide,
} from "@material-ui/core";

import CategoryItem from "../components/CategoryItem";
import { connect } from "react-redux";

import { getAllCategory } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
  loading: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
}));

const Category = ({ category, getAllCategory }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);
  const slideTransition = (props) => {
    return <Slide {...props} direction="down" />;
  };
  return (
    <>
      <Grid container className={classes.root} justify="center">
        <Grid item container xs={12} md={6} spacing={2}>
          {category.list.map((item) => {
            return (
              <Grid item xs={6} key={item._id}>
                <CategoryItem item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={category.loading}
        TransitionComponent={slideTransition}
        key=""
      >
        <Paper className={classes.loading}>
          <CircularProgress size={30} />
        </Paper>
      </Snackbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getAllCategory })(Category);
