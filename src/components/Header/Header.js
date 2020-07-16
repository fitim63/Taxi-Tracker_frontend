import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/vehicleTrackerLogo.png";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
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
              <Nav.Link className="font-weight-normal" as={Link} to="/home">
                Home
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link className="font-weight-normal" as={Link} to="/reports">
                Reports
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link
                className="font-weight-normal"
                as={Link}
                to="/userDetails"
              >
                User Details
              </Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link
                className="font-weight-normal"
                as={Link}
                to="/vehicleAddDelete"
              >
                Vehicle
              </Nav.Link>
            </NavItem>
          </Nav>
          <NavItem>
            <Button
              variant="outline-success"
              className="btn primary mr-3"
              onClick={() => {
                localStorage.removeItem("token");
                history.push("/login");
              }}
            >
              LogOut
            </Button>
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
