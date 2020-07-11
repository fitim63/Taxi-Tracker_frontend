import React, {useState, useEffect} from "react";
import reports from "./reports.css";
import axios from "axios";
import {Link} from "react-router-dom";
import ListGroup from "./ListGroup";
import createSpacing from "@material-ui/core/styles/createSpacing";
import Header from "../Header/Header";
import {AiFillCar} from "react-icons";
import {fetchDriverReports} from "../../actions";
import {useSelector, useDispatch} from "react-redux";

const Reports = () => {

    // const [driver_reports, setDriver_reports] = useState([]);

    const reports = useSelector(state => state.reps.reports);
    const dispatch = useDispatch();
    const [types, setTypes] = useState([
        {_id: "", name: "Vehicle Reports"},
        {_id: "", name: "Driver Reports"},
        {_id: "", name: "Monitor Reports"},
        {_id: "", name: "Daily Driver Reports"}
    ]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(async () => {
        dispatch(await fetchDriverReports());
        console.log("useEffect -- reports", reports);
    }, []);

    const handleSelectedType = (type) => {
        setSelectedType(type);
    };

    const renderDriverTable = () => {
        return (

            <div className="col-9">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Average Speed</th>
                        <th scope="col">Updated At</th>
                        <th scope="col">Driver id</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.length === 0 ?
                        <tr align="center">
                            <td colSpan="5">No reports available.</td>
                        </tr> :
                        reports.map((report) => (
                            <tr key={report.id}>
                                <td>{report.id}</td>
                                <td>{report.createdAt}</td>
                                <td>{report.driverAverageSpeed}</td>
                                <td>{report.updatedAt}</td>
                                <td>{report.driver.id}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <Header/>
            <div className="table-list-custom">
                <div className="col-3">
                    <ListGroup
                        items={types}
                        selectedItem={selectedType}
                        onItemSelect={handleSelectedType}
                    />
                </div>
            </div>
            <div>
                {renderDriverTable()}
            </div>
        </div>
    );
};


export default Reports;

