import axios from "axios";
import {
    FETCH_REPORTS_FAIL,
    FETCH_REPORTS_PENDING,
    FETCH_REPORTS_SUCCESS,
} from "../constants";


export const fetchReportsPending = () => ({
    type: FETCH_REPORTS_PENDING
});

const token = localStorage.getItem("token");

export const fetchVehicleReports = () => {
    return async dispatch => {
        dispatch(fetchReportsPending());
        await axios.get("http://localhost:8080/vehicle-reports", {
            headers: {
                'Authorization': "Bearer " +token,
                'Content-Type': 'application/json'
            }
        })
            .then(res =>  dispatch({
                type: FETCH_REPORTS_SUCCESS,
                payload: {
                    pending: false,
                    vehicleReports: res.data
                }
            }, console.log("vehicle reports success -- ", res.data)))
            .catch(err => {
                dispatch({
                    type: FETCH_REPORTS_FAIL,
                }, console.log("error",err))
            });
    }
};