import React from "react";
import { connect } from "react-redux";
import { updateSetting, getAllCategory } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import Loading from "../components/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function Setting({
  onProcess,
  setting,
  updateSetting,
  category,
  getAllCategory,
}) {
  const classes = useStyles();

  React.useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);

  React.useEffect(() => {
    if (category.list.length > 0) {
      let initSetting = {};
      category.list.length > 0 &&
        category.list.forEach((item, index) => (initSetting[item._id] = 1));
      updateSetting(initSetting);
    }
  }, [category, updateSetting]);

  const handleChange = (event, newValue, name) => {
    updateSetting({ ...setting, [name]: newValue });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          {category.list.length > 0 &&
            category.list.map((item) => (
              <>
                <Typography id="discrete-slider-always" gutterBottom>
                  Số lượng {item.name}
                </Typography>
                <Slider
                  onChange={(e, n) => handleChange(e, n, item._id)}
                  defaultValue={1}
                  aria-labelledby="discrete-slider-always"
                  step={1}
                  min={1}
                  max={10}
                  valueLabelDisplay="on"
                />
              </>
            ))}
        </Grid>
        <Grid item xs={10}>
          <Button
            onClick={onProcess}
            color="primary"
            size="small"
            variant="contained"
            endIcon={<PlayCircleFilled />}
            disabled={category.loading}
          >
            Thực hiện
          </Button>
          <Loading open={category.loading} />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  setting: state.setting,
  category: state.category,
});

export default connect(mapStateToProps, { updateSetting, getAllCategory })(
  Setting
);
