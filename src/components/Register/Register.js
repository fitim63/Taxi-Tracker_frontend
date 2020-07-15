import * as React from "react";
import { Image } from "react-bootstrap";
import "./Register.css";
import RegisterForm from "./RegisterForm";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../actions";
import logo from "../../assets/vehicleTrackerLogo.png";
import { useHistory } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
import { reduxForm } from "redux-form";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.authRegisterValidation);
  const onSubmit = async (formProps) => {
    console.log("Props: ", formProps);
    if (register) {
      console.log("firstName error: ", error.error);
      console.log("lastName error: ", error.error);
      console.log("username error: ", error.error);
      console.log("password error: ", error.error);
      console.log("email error: ", error.error);
    } else {
      dispatch(
        await register({
          firstName: formProps.username,
          lastName: formProps.lastName,
          username: formProps.username,
          password: formProps.password,
          email: formProps.email,
        })
      );
    }
    //history.push("/login");
  };

  return (
    <div className="row d-flex justify-content-center background-container">
      <div
        style={{ marginTop: "0px" }}
        className="col-md-3 align-self-center  login-form fadeInDown"
      >
        <div className="form-header">
          <h2 className="register-text">
            Server Registration Form
            <AiOutlineUserAdd className="align-self-center mb-1 ml-1" />
          </h2>
          <Image src={logo} className="vt-logo" />
        </div>
        <RegisterForm onSubmit={onSubmit} />
        {error && <h2 className="errorMessage">{error.error}</h2>}
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
