import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import Loading from "../components/Loading";
import CategoryItem from "../components/CategoryItem";
import { connect } from "react-redux";

import { getAllCategory } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
  },
}));

const Category = ({ category, getAllCategory }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);

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
      <Loading open={category.loading} />
    </>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
});

export default connect(mapStateToProps, { getAllCategory })(Category);
