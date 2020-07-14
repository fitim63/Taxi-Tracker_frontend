import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/vehicleTrackerLogo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="bg navbar-custom" variant="dark" expand="lg">
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
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link as={Link} to="/reports">
                Reports
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
