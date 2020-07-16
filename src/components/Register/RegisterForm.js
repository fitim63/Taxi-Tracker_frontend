import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";
import { validateRegistration, warn } from "../Login/ValidationServices";

const RegisterForm = (props) => {
  const { handleSubmit, onSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        type="text"
        placeholder="First Name"
        name="firstName"
        component={CustomInput}
      />
      <Field
        type="text"
        name="lastName"
        placeholder="Last Name"
        component={CustomInput}
      />
      <Field
        type="text"
        name="username"
        placeholder="Username"
        component={CustomInput}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        component={CustomInput}
      />
      <Field
        type="text"
        name="email"
        placeholder="Email"
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

export default reduxForm({
  form: "register",
  validate: validateRegistration,
  warn,
})(RegisterForm);
