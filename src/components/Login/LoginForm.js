import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";

var passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

class LoginForm extends Component{
//const LoginForm = (props) => {
  //const { handleSubmit, onSubmit } = props;
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            formErrors: {
                username: "",
                password: ""
            }
        };
    }
    handleSubmit = e => {
        e.preventDefault();
    };

    handleChange = e => {
        const{name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch(name){
            case 'username':
                formErrors.username =
                    value.length < 3 && value.length > 0
                ? 'Minimum 3 characters required'
                : "";
                break;
            case 'password':
                formErrors.password =
                    passRegex.test(value) && value.length > 0
                    ? ""
                    : 'Minimum 6 letters and numbers are required'; //include at least one number
                break;
            default:
                break;
        }
        this.setState({formErrors, [name]:value}, () => console.log(this.state));
    }


    render() {
        const {formErrors} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <Field
                        className={formErrors.username.length > 0 ? "error" : null}
                        type="text"
                        placeholder="Username"
                        name="username"
                        component={CustomInput}
                        onChange={this.handleChange}
                    />
                    {formErrors.username.length > 0 && (
                        <span className="errorMessage">{formErrors.username}</span>
                    )}
                </fieldset>
                <fieldset>
                    <Field
                        className={formErrors.password.length > 0 ? "error" : null}
                        type="password"
                        name="password"
                        placeholder="Password"
                        component={CustomInput}
                        onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                        <span className="errorMessage">{formErrors.password}</span>
                    )}
                </fieldset>
                <button className="btn m-1 btn-success btn-block" type="submit">
                    Login
                </button>
            </form>
        );
    }
};

export default reduxForm({ form: "login" })(LoginForm);
