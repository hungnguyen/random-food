import {
  Grid,
  Typography,
  Avatar,
  ListItem,
  List,
  ListItemAvatar,
  ListItemText,
  Button,
  Divider,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { getAllCategory, getAllFood } from "../actions";
import { Cached } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    paddingBottom: 50,
  },
}));

const Result = ({
  category,
  food,
  setting,
  getAllCategory,
  getAllFood,
  onBack,
}) => {
  const classes = useStyles();
  React.useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);
  React.useEffect(() => {
    getAllFood();
  }, [getAllFood]);

  const randomFood = (total, categoryId) => {
    let foodByCat = food.list.filter((item) => item.categoryId === categoryId);
    let selected = [];
    for (let i = 0; i < total; i++) {
      let index = Math.floor(Math.random() * foodByCat.length);
      selected.push(foodByCat[index]);
    }

    return selected;
  };

  return (
    <>
      <Grid container className={classes.root}>
        {category.list.length > 0 &&
          food.list.length > 0 &&
          category.list.map((item) => (
            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom align="left">
                {item.name}
              </Typography>
              <Divider />
              <List dense={false}>
                {randomFood(setting.main, item._id).map(
                  (f) =>
                    f && (
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt={f.name} src={f.image} />
                        </ListItemAvatar>
                        <ListItemText primary={f.name} />
                      </ListItem>
                    )
                )}
              </List>
            </Grid>
          ))}
        <Grid item xs={12}>
          <Button
            onClick={onBack}
            color="primary"
            size="small"
            variant="contained"
            endIcon={<Cached />}
          >
            Chọn lại
          </Button>
        </Grid>
      </Grid>
      <Loading open={category.loading || food.loading} />
    </>
  );
};

const mapStateToProps = (state) => ({
  category: state.category,
  food: state.food,
  setting: state.setting,
});

export default connect(mapStateToProps, { getAllCategory, getAllFood })(Result);
