import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function FoodItem({ item, onEdit, onDelete }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onEdit}>
        <CardMedia
          className={classes.media}
          image={item.image}
          title={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          className={classes.button}
        >
          <Button onClick={onEdit}>Sửa</Button>
          <Button onClick={onDelete}>Xóa</Button>
        </ButtonGroup>
      </CardActions> */}
    </Card>
  );
}
