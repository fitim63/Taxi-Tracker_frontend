import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Route, Link, Switch } from "react-router-dom";
import reports from "../Reports";
import logo from "../../assets/vehicleTrackerLogo.png";
import "../style.css";
import {useHistory} from "react-router-dom";

const Header = () => {

  const history = useHistory()
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
              <Nav.Link as={Link} to="/reports">
                Reports
              </Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search.."
              className="mr-sm-2"
            />
            <Button variant="outline-success" className='btn primary mr-3'>Search</Button>
          </Form>
          <NavItem>
            <Button onClick={async ()=>{

              await localStorage.removeItem("token");
              await localStorage.clear();
              history.push('/login');

            }}>
              LogOut
            </Button>
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/reports" component={reports} />
      </Switch>
    </div>
  );
};

export default Header;
