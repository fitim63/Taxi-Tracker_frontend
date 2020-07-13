import React, {useState, useEffect} from "react";
import ListGroup from "./ListGroup";
import Header from "../Header/Header";
import {useSelector, useDispatch} from "react-redux";
import ReportsDataComponent from "./ReportsDataComponent";
import {fetchVehicleReports, fetchDriverReports} from "../../actions";

const Reports = () => {

    const [types, setTypes] = useState([
        {id: "1", name: "Vehicle Reports"},
        {id: "2", name: "Driver Reports"},
        {id: "3", name: "Monitor Reports"},
        {id: "4", name: "Daily Driver Reports"}
    ]);
    const [selectedType, setSelectedType] = useState(null);
    const vehicleReports = useSelector(state => state.vehicleReps.vehicleReports);
    const driverReports = useSelector(state => state.reps.reports);
    const [data, setData] = useState([]);

    useEffect(async () => {
        if (data.length === 0 && vehicleReports.length === 0) {
            setData(vehicleReports);
            console.log("Init Report", data);

        }
    }, []);

    const dispatch = useDispatch();

    const handleSelectedType = async (type) => {
        if (type.id === "1") {
            dispatch(await fetchVehicleReports());
            setSelectedType(type);
            setData(vehicleReports);
        } else if (type.id === "2") {
            dispatch(await fetchDriverReports());
            setSelectedType(type);
            setData(driverReports);
        }
    };

    return (
        <div>
            <Header/>
            <div className="table-list-custom">
                <div className="col-3">
                    {/*<ul className="list-group">*/}
                    {/*    <li className="list-group-item">Vehicle Reports</li>*/}
                    {/*    <li className="list-group-item">Driver Reports</li>*/}
                    {/*    <li className="list-group-item">Monitor Reports</li>*/}
                    {/*    <li className="list-group-item">Daily Driver Reports</li>*/}
                    {/*</ul>*/}
                    <ListGroup
                        items={types}
                        selectedItem={selectedType}
                        onItemSelect={(type) => handleSelectedType(type)}
                    />
                </div>
            </div>
            <div>

                        <ReportsDataComponent reportData={data.length === 0 ? vehicleReports : data }/>
            </div>
        </div>
    );
};


export default Reports;

