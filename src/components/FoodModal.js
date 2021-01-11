import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { getSingleFood, updateFood, createFood } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(2),
    },
  },
}));

function FoodModal({
  open,
  onClose,
  foodId,
  food,
  getSingleFood,
  updateFood,
  categoryId,
  createFood,
}) {
  const classes = useStyles();
  const init = {
    categoryId,
    name: "",
    image: "",
  };
  const [updateObj, setUpdateObj] = React.useState(init);

  React.useEffect(() => {
    if (foodId !== 0 && food.item._id !== foodId) {
      getSingleFood(foodId);
    }
  }, [foodId, getSingleFood, food.item]);

  React.useEffect(() => {
    if (foodId !== 0) {
      setUpdateObj(food.item);
    }
  }, [food.item, setUpdateObj, foodId]);
  const resetForm = () => {
    setUpdateObj(init);
  };
  const handleSave = () => {
    if (foodId !== 0) {
      updateFood({
        foodId,
        body: updateObj,
      });
    } else {
      createFood({ body: updateObj });
    }
    resetForm();
    onClose();
  };
  const handleClose = () => {
    resetForm();
    onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateObj({ ...updateObj, [name]: value });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">Món ăn</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              name="name"
              label="Tên món ăn"
              type="text"
              value={updateObj.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              name="image"
              label="Hình ảnh"
              type="text"
              placeholder="http://"
              value={updateObj.image}
              onChange={handleChange}
              fullWidth
              multiline
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  food: state.food,
});

export default connect(mapStateToProps, {
  getSingleFood,
  updateFood,
  createFood,
})(FoodModal);
