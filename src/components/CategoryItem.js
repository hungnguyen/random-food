import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export default function Category({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <NavLink to={`/food/${item._id}`} className={classes.link}>
            <Icon color={item.color} style={{ fontSize: 30 }}>
              {item.icon}
            </Icon>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
          </NavLink>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
