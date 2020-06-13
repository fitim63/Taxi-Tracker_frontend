import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";

const RegisterForm = (props) => {
  const { handleSubmit, onSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <Field
          type="text"
          placeholder="First Name"
          name="firstName"
          component={CustomInput}
        />
      </fieldset>
      <fieldset>
        <Field
          type="text"
          name="lastName"
          placeholder="Last Name"
          component={CustomInput}
        />
      </fieldset>

      <fieldset>
        <Field
          type="text"
          name="username"
          placeholder="Username"
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
      <fieldset>
        <Field
          type="text"
          name="email"
          placeholder="Email"
          component={CustomInput}
        />
      </fieldset>
      <button className="btn m-1 btn-success btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default reduxForm({ form: "register" })(RegisterForm);
