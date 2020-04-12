import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import home from "../roots/Home";
import login from "../roots/Login";
import support from "../roots/Support";
import logo from "../assets/vehicleTrackerLogo.png";
import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="bg header-black" variant="dark" expand="lg">
        <NavbarBrand as={Link} to="/">
          <img
            src={logo}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="React logo"
          />{" "}
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/support">
                Support
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search.."
              className="mr-sm-2"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/support" component={support} />
        <Route path="/login" component={login} />
      </Switch>
    </div>
  );
};

export default Header;
