import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchMonitorReports} from "../../actions";

const MonitorReports = () => {

    const reports = useSelector(state => state.vehicleReps.vehicleReports);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(fetchMonitorReports());
    }, []);

    return (
        <div className="col-9">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Vehicle Id</th>
                    <th scope="col">Distance Traveled</th>
                    <th scope="col">Total Fuel Spent</th>
                </tr>
                </thead>
                <tbody>
                {reports.length === 0 ?
                    <tr align="center">
                        <td colSpan="5">No reports available.</td>
                    </tr> :
                    reports.map((report) => (
                        <tr key={report.id}>
                            <td>{report.server.id}</td>
                            <td>{report.vehicle.id}</td>
                            <td>{report.distance_traveled}</td>
                            <td>{report.total_fuel_spent}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default MonitorReports;
