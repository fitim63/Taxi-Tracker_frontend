import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchVehicleReports} from "../../actions";
import {Link} from "react-router-dom";

const ReportsDataComponent = (reportData) => {

    const reports = useSelector(state => state.vehicleReps.vehicleReports);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("ReportsDataComponent: ", reportData);
        }
    );

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
                { reportData === null ? (
                    <tr align="center">
                        <td colSpan="5">No reports available.</td>
                    </tr>
                ): (<div> data</div>
                   /* reportData.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.vehicles.id}</td>
                            <td>{data.distanceTraveledInKilometers}</td>
                            <td>{data.totalFuelSpentUntilNow}</td>
                        </tr>
                    ))*/
                )}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsDataComponent;
