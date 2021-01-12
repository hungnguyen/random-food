import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { updateFood, createFood } from "../actions";

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
  food,
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
    if (food.item._id || (food.item._id && updateObj._id === undefined)) {
      console.log("a");
      setUpdateObj(food.item);
    }
  }, [food.item, setUpdateObj, updateObj._id]);

  const resetForm = () => {
    setUpdateObj(init);
  };
  const handleSave = () => {
    if (food.item._id) {
      updateFood({
        foodId: food.item._id,
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
  updateFood,
  createFood,
})(FoodModal);
