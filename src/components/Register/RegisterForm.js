import React, {Component} from "react";
import { Field, reduxForm } from "redux-form";
import CustomInput from "../CustomInput";

var passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
var emailRegex = RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)

class RegisterForm extends Component {
    //const RegisterForm = (props) => {
    //const { handleSubmit, onSubmit } = props;
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            username: null,
            password: null,
            email: null,
            formErrors: {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                email: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    handleChange = e => {
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName =
                    value.length < 3 && value.length > 0
                        ? 'Minimum 3 characters required'
                        : "";
                break;
            case 'lastName':
                formErrors.lastName =
                    value.length < 3 && value.length > 0
                        ? 'Minimum 3 characters required'
                        : "";
                break;
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
            case 'email':
                formErrors.email =
                    emailRegex.test(value) && value.length > 0
                        ? ""
                        : 'Invalid email';
                break;
            default:
                break;
        }
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    }

    render() {
        const {formErrors} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <Field
                        className={formErrors.firstName.length > 0 ? "error" : null}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        component={CustomInput}
                        onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                        <span className="errorMessage">{formErrors.firstName}</span>
                    )}
                </fieldset>
                <fieldset>
                    <Field
                        className={formErrors.lastName.length > 0 ? "error" : null}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        component={CustomInput}
                        onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                        <span className="errorMessage">{formErrors.lastName}</span>
                    )}
                </fieldset>

                <fieldset>
                    <Field
                        className={formErrors.username.length > 0 ? "error" : null}
                        type="text"
                        name="username"
                        placeholder="Username"
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
                <fieldset>
                    <Field
                        className={formErrors.email.length > 0 ? "error" : null}
                        type="text"
                        name="email"
                        placeholder="Email"
                        component={CustomInput}
                        onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                </fieldset>
                <button className="btn m-1 btn-success btn-block" type="submit">
                    Submit
                </button>
            </form>
        );
    };
};

export default reduxForm({ form: "register" })(RegisterForm);
