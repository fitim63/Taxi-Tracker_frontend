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

export const fetchDriverReports = () => {
    return async dispatch => {
            dispatch(fetchReportsPending());
            await axios.get("http://localhost:8080/driver-reports", {
                headers: {
                    'Authorization': "Bearer " +token,
                    'Content-Type': 'application/json'
                }
            })
                .then(res =>  dispatch({
                    type: FETCH_REPORTS_SUCCESS,
                    payload: {
                        token: res.data.token,
                        isAuthenticated: true,
                        pending: false,
                        reports: res.data
                    }
                },console.log("SUCCESS ----", res.data)))
                .catch(err => {
                    console.log("error ----", err);
                    dispatch({
                        type: FETCH_REPORTS_FAIL,
                    })
                });
    }
};