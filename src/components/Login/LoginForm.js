import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";

const LoginForm = (props) => {
    const { handleSubmit, onSubmit } = props;
    return (
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
            <button className="btn m-1 btn-success btn-block" type="submit">
                Login
            </button>
        </form>
    );
};
export default reduxForm({ form: "login" })(LoginForm);