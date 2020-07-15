import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";
import { validateLogin, warn } from "./ValidationServices";

let LoginForm = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        type="text"
        placeholder="Username"
        name="username"
        component={CustomInput}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        component={CustomInput}
      />
      <button
        className="btn m-1 btn-success btn-block"
        type="submit"
        disabled={submitting}
      >
        Submit
      </button>
    </form>
  );
};
export default reduxForm({ form: "login", validate: validateLogin, warn })(
  LoginForm
);
