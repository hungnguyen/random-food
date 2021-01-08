import React from "react";

import { loginSuccess } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Facebook } from "@material-ui/icons";
import { Button, Grid } from "@material-ui/core";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));

const Login = ({ loginSuccess }) => {
  const classes = useStyles();
  const history = useHistory();
  const responseFacebook = (response) => {
    loginSuccess(response);
    history.push("/");
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <FacebookLogin
          appId="487035511405233"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile"
          callback={responseFacebook}
          render={(renderProps) => (
            <Button
              size="large"
              variant="contained"
              color="primary"
              startIcon={<Facebook />}
              onClick={renderProps.onClick}
            >
              Login
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default connect(null, { loginSuccess })(Login);
