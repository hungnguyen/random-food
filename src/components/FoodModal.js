import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";

import { connect } from "react-redux";
import { getSingleFood, updateFood } from "../actions";

function FoodModal({
  open,
  onClose,
  foodId,
  food,
  getSingleFood,
  updateFood,
  categoryId,
}) {
  const [updateObj, setUpdateObj] = React.useState({ categoryId });

  React.useEffect(() => {
    if (foodId) {
      getSingleFood(foodId);
    }
  }, [foodId, getSingleFood]);

  React.useEffect(() => {
    setUpdateObj(food.item);
  }, [food.item, setUpdateObj]);

  const handleSave = () => {
    updateFood({
      foodId,
      body: updateObj,
    });
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
          <Input name="categoryId" value={updateObj.categoryId} type="hidden" />
          <TextField
            name="name"
            label="Tên món ăn"
            type="text"
            value={updateObj.name}
            onChange={handleChange}
          />
          <TextField
            name="image"
            label="Hình ảnh"
            type="text"
            placeholder="http://"
            value={updateObj.iamge}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
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

export default connect(mapStateToProps, { getSingleFood, updateFood })(
  FoodModal
);
