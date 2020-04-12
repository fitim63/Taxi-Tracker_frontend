import React from "react";
import {Form, Button} from "react-bootstrap";
import '../components/style.css'

// This is a Class Component that has state.
// State is used to store data in component for example: (username, password) for making request to the api
export default class Login extends React.Component {

    // state init with empty values
    state = {
        username: '',
        password: ''
    };

    // get data from input and save it in react state
    handleChange(event) {
        this.setState({
            username: event.target.value,
        });
    }

    handleRegistration(event) {

    }

    // this is render method where is written in JSX( almost same as html )
    // everything that is here will be visible

    render() {
        return (
            <div className="row d-flex justify-content-center fadeInDown">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="username"
                                onChange={value => this.handleChange(value)}/>
                            <Form.Control
                                className="m-2"
                                type="password"
                                placeholder="password"
                                onChange={p => this.setState({password: p.target.value})}/>
                        </Form.Group>
                        <Button className="btn btn-success m-2 btn-block" type="submit" onClick={() => this.handleLogin()}>
                            Login
                        </Button>
                    </Form>

                    <Button className="btn btn-success m-2 btn-block" type="button" onClick={() => this.handleRegistartion()}>
                        Register
                    </Button>
                </div>

            </div>
        )
    }
}
