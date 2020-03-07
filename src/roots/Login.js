import React from "react";
import {Form, Button} from "react-bootstrap";

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

    // this is render method where is written in JSX( almost same as html )
    // everything that is here will be visible

    render() {
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="Enter email or username"
                                onChange={value => this.handleChange(value)}/>
                            <Form.Control
                                className="m-2"
                                type="password"
                                placeholder="Password"
                                onChange={p => this.setState({password: p.target.value})}/>
                            <Form.Text className="text-muted m-2">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn btn-success m-2"  type="submit" onClick={() => this.handleLogin()}>
                            Login
                        </Button>
                    </Form>
                </div>

            </div>
        )
    }
}
