import React from "react";
import "./Login.css";
import { login } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Button, Image } from "react-bootstrap";
import logo from "../../assets/vehicleTrackerLogo.png";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const Login = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  let onSubmitClicked = false;
  const history = useHistory();

  const onSubmit = async (formProps) => {
    onSubmitClicked = true;
    dispatch(
      await login({
        username: formProps.username,
        password: formProps.password,
      })
    );
    history.push("/home");
  };

  return (
    <div className="row d-flex border-bottom background-container">
      <div className="col-md-1 col-md-2 col-md-3 login-form fadeInDown">
        <div className="form-header">
          <h2 className="register-text">
            Server Login Form
            <AiOutlineUser className="align-self-center mb-1 ml-1" />
          </h2>
          <Image src={logo} className="vt-logo" />
        </div>
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
        <Button
          className="btn m-1 btn-success btn-block"
          type="button"
          onClick={() => {
            history.push("/register");
          }}
        >
          Register
        </Button>
        <h2 className="login-label">
          You must login to access this app.. <FaRegSmile />
        </h2>
      </div>
    </div>
  );
};

export default reduxForm({ form: "login" })(Login);
