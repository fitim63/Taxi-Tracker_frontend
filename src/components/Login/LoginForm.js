import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";
import { Button } from "react-bootstrap";

const LoginForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <Field
            type="text"
            placeholder="Username"
            name="username"
            component={CustomInput}
          />
        </fieldset>
        <fieldset>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={CustomInput}
          />
        </fieldset>
        <button className="btn m-2 btn-success btn-block" type="submit">
          Login
        </button>
      </form>

      <Button
        className="btn m-2 btn-success btn-block"
        type="button"
        onClick={handleSubmit(onSubmit)}
      >
        Register
      </Button>
      <h2 className="login-label text-center">
        You must login to access this app..{" "}
      </h2>
    </div>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
