import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import FoodItem from "../components/FoodItem";
import FoodModal from "../components/FoodModal";

import { deleteFood, getAllFood } from "../actions";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    paddingBottom: 50,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: 0,
    left: 0,
    margin: "0 auto",
    zIndex: 999,
  },
}));

function Food({ food, deleteFood, getAllFood, auth }) {
  const params = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [foodId, setFoodId] = React.useState(0);
  const [foodByCat, setFoodByCat] = React.useState([]);

  React.useEffect(() => {
    getAllFood();
  }, [getAllFood]);

  React.useEffect(() => {
    if (food.list.length > 0) {
      setFoodByCat(
        food.list.filter((item) => item.categoryId === params.categoryId)
      );
    }
  }, [food.list, params.categoryId]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleEdit = (id) => {
    setFoodId(id);
    handleOpen();
  };
  const handleDelete = (item) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa "${item.name}"?`)) {
      deleteFood(item._id);
    }
  };
  return (
    <>
      <Fab
        aria-label="Add"
        className={classes.fab}
        color="primary"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {foodByCat &&
              foodByCat.map((item) => (
                <Grid key={item._id} item xs={6} md={2}>
                  <FoodItem
                    item={item}
                    onEdit={() => handleEdit(item._id)}
                    onDelete={() => handleDelete(item)}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <FoodModal
        open={open}
        onClose={handleClose}
        foodId={foodId}
        categoryId={params.categoryId}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  food: state.food,
});

export default connect(mapStateToProps, { deleteFood, getAllFood })(Food);
