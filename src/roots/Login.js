import React from "react";
import {Form, Button, Container} from "react-bootstrap";
import '../components/style.css'

export default class Login extends React.Component {

    // state init with empty values
    state = {
        username: '',
        password: ''
    };

    handleChange(event) {
        this.setState({
            username: event.target.value,
        });
    }
    handleRegistration(event) {

    }

    render() {
        return (
            <div className="row d-flex justify-content-center fadeInDown">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Container>
                                <label className="text-center">Login</label>
                            </Container>
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
