import * as React from "react";
import { Image } from "react-bootstrap";
import "./Register.css";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../actions";
import logo from "../../assets/vehicleTrackerLogo.png";
import { useHistory } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { reduxForm } from "redux-form";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (formProps) => {
    console.log("Props: ", formProps);
    dispatch(
      await register({
        firstName: formProps.username,
        lastName: formProps.lastName,
        username: formProps.username,
        password: formProps.password,
        email: formProps.email,
      })
    );
    history.push("/login");
  };
  return (
    <div className="d-flex justify-content background-container">
      <div className="col-md-3 align-self-center  login-form fadeInDown">
        <div className="form-header">
          <h2 className="register-text">
            Server Registration Form
            <AiOutlineUserAdd className="align-self-center mb-1 ml-1" />
          </h2>
          <Image src={logo} className="vt-logo" />
        </div>
        <RegisterForm onSubmit={onSubmit} />
        <button
          className="btn m-1 btn-success btn-block"
          type="button"
          onClick={() => {
            history.push("/login");
          }}
        >
          Back to login
        </button>
      </div>
    </div>
  );
};
export default reduxForm({ form: "register" })(Register);
