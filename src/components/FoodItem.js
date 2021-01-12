import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { IconButton } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Close from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    position: "relative",
  },
  media: {
    height: 140,
  },
  button: {
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    position: "absolute",
    top: 5,
    right: 5,
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    padding: theme.spacing(1),
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
      <IconButton onClick={onDelete} className={classes.delete}>
        <Close style={{ textShadow: "0px 0px 3px #ffffff" }} />
      </IconButton>
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
