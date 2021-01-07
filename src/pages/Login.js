import React from "react";
import FacebookLogin from "react-facebook-login";
import { loginSuccess } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ loginSuccess }) => {
  const history = useHistory();
  const responseFacebook = (response) => {
    loginSuccess(response);
    history.push("/");
  };
  return (
    <FacebookLogin
      appId="487035511405233"
      autoLoad={true}
      fields="name,email,picture"
      scope="public_profile"
      callback={responseFacebook}
    />
  );
};

export default connect(null, { loginSuccess })(Login);
