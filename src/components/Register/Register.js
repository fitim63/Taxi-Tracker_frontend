import * as React from "react";
import {Button, Container, Form} from "react-bootstrap";
import './Register.css'

export default class Register extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email: ''
    };

    handleChange(event) {
        this.setState({
            first_name: event.target.value,
            last_name: event.target.value,
            username: event.target.value,
            email: event.target.value,
        });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center fadeInDown">
                <div className="col-md-3 m-5">
                    <Form>
                        <Form.Group controlId="formBasicPhoneNumber">
                            <Container>
                                <label className="text-center">Register</label>
                            </Container>
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="first_name"
                                onChange={value => this.handleChange(value)}/>
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="last_name"
                                onChange={value => this.handleChange(value)}/>
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
                            <Form.Control
                                className="m-2"
                                type="text"
                                placeholder="email"
                                onChange={value => this.handleChange(value)}/>
                        </Form.Group>
                    </Form>

                    <Button className="btn btn-success m-2 btn-block" type="button"
                            onClick={() => this.registerMethod}>
                        Register
                    </Button>
                </div>

            </div>
        )
    }
}