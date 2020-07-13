import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchDriverReports} from "../../actions";
import reports from "./reports.css";

const DriverReports = (props) => {
    const reports = useSelector(state => state.reps.reports);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(await fetchDriverReports());
    }, []);

    return (
        <div className="col-9">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
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

export default DriverReports;