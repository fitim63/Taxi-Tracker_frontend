import axios from "axios";
import {
    FETCH_REPORTS_FAIL,
    FETCH_REPORTS_PENDING,
    FETCH_REPORTS_SUCCESS,
} from "../constants";


export const fetchReportsPending = () => ({
    type: FETCH_REPORTS_PENDING
});

export const fetchReportsSuccess = driver_reports => ({
    type: FETCH_REPORTS_SUCCESS,
    payload: {driver_reports}
});

export const fetchReportsError = error => ({
    type: FETCH_REPORTS_FAIL,
    payload: {error}
});

// const authAxios = axios.create({
//     headers: {
//         Authorization: token
//     }
// });
const token = localStorage.getItem("token");
console.log("tokeni 2", token);

export const fetchDriverReports = () => {
    return async dispatch => {

        try {
            dispatch(fetchReportsPending());
            await axios.get("http://localhost:8080/driver-reports", {
                headers: {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log('RES',res.data);
                    console.log(res.status);
                    dispatch(fetchReportsSuccess(res.data));
                });
        } catch (e) { //haht
            fetchReportsError(e);
        }
    }
};