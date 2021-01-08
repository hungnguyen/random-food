import React from "react";
import { connect } from "react-redux";
import { updateSetting } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";

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

function Setting({ onProcess, setting, updateSetting }) {
  const classes = useStyles();

  const handleChange = (event, newValue, name) => {
    updateSetting({ ...setting, [name]: newValue });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Typography id="discrete-slider-always" gutterBottom>
            Số lượng món chính
          </Typography>
          <Slider
            onChange={(e, n) => handleChange(e, n, "main")}
            defaultValue={setting.main}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={1}
            max={10}
            valueLabelDisplay="on"
          />
          <Typography id="discrete-slider-always" gutterBottom>
            Số lượng món phụ
          </Typography>
          <Slider
            onChange={(e, n) => handleChange(e, n, "sub")}
            defaultValue={setting.sub}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={1}
            max={10}
            valueLabelDisplay="on"
          />
          <Typography id="discrete-slider-always" gutterBottom>
            Số lượng rau
          </Typography>
          <Slider
            onChange={(e, n) => handleChange(e, n, "vegetable")}
            defaultValue={setting.vegetable}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={1}
            max={10}
            valueLabelDisplay="on"
          />
          <Typography id="discrete-slider-always" gutterBottom>
            Số lượng canh
          </Typography>
          <Slider
            onChange={(e, n) => handleChange(e, n, "soup")}
            defaultValue={setting.soup}
            aria-labelledby="discrete-slider-always"
            step={1}
            min={1}
            max={10}
            valueLabelDisplay="on"
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            onClick={onProcess}
            color="primary"
            size="small"
            variant="contained"
            endIcon={<PlayCircleFilled />}
          >
            Thực hiện
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  setting: state.setting,
});

export default connect(mapStateToProps, { updateSetting })(Setting);
