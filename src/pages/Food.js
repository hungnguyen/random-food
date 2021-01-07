import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import FoodItem from "../components/FoodItem";
import FoodModal from "../components/FoodModal";

import { deleteFood, getAllFood } from "../actions";

import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Food({ food, deleteFood, getAllFood, auth }) {
  const params = useParams();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [foodId, setFoodId] = React.useState(undefined);
  const [foodByCat, setFoodByCat] = React.useState([]);

  React.useEffect(() => {
    if (food.list) {
      getAllFood();
    }
  });

  React.useEffect(() => {
    setFoodByCat(
      food.list.Food.filter((item) => (item.categoryId = params.categoryId))
    );
  }, [food.list.Food, params.categoryId]);

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
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      deleteFood(id);
    }
  };
  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {foodByCat &&
              foodByCat.map((item) => (
                <Grid key={item._id} item>
                  <FoodItem
                    item={item}
                    onEdit={() => handleEdit(item._id)}
                    onDelete={() => handleDelete(item._id)}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <FoodModal open={open} onClose={handleClose} foodId={foodId} />
    </>
  );
}

const mapStateToProps = (state) => ({
  food: state.food,
});

export default connect(mapStateToProps, { deleteFood, getAllFood })(Food);
