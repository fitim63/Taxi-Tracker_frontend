import React, {Component} from "react"
import {reduxForm, Field} from "redux-form";
import {compose} from "redux";
import * as actions from "../actions";
import {connect} from "react-redux";

class Signup extends Component{

    onSubmit = ({email, password}) => {
        const {signup} = this.props
        signup({email, password});
    };
    render() {
        const {handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        autoComplete="none"
                        type="password"
                        component="input"
                    />
                </fieldset>
                <button>Sign UP!</button>
            </form>
        )
    }
}

export default compose(
    connect(null, actions),
    reduxForm({form: 'signup'}),
)(Signup)

