import React from "react";
import {Navbar, NavbarBrand} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import logo from "../assets/vehicleTrackerLogo.png";

const Reports = (props) => {
    return (
        <div>
            <Navbar bg="bg navbar-custom" variant="dark" expand="lg">
                Reports
            </Navbar>

            <div className="col-2">
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <div className="col-2">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Reports;
