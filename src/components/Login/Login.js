import React from "react";
import "./Login.css";
import { login } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Image } from "react-bootstrap";
import logo from "../../assets/vehicleTrackerLogo.png";
import LoginForm from "./LoginForm";
const Login = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  let onSubmitClicked = false;

  const onSubmit = async (formProps) => {
    onSubmitClicked = true;
    dispatch(
      await login({
        username: formProps.username,
        password: formProps.password,
      })
    );
  };

  return (
    <div className="row d-flex justify-content-center background-container">
      <div className="col-md-2.5 align-self-center m-5 login-form fadeInDown">
        <Image src={logo} className="vt-logo" />
        {(onSubmitClicked && (
          <Loader
            type="Puff"
            color="#0000"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )) ||
          (!onSubmitClicked && token && (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location,
                },
              }}
            />
          ))}
        <LoginForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default reduxForm({ form: "login" })(Login);
