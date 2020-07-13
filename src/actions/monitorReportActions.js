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

export const fetchMonitorReports = () => {
    return async dispatch => {
        dispatch(fetchReportsPending());
        await axios.get("http://localhost:8080/monitor-reports", {
            headers: {
                'Authorization': "Bearer " +token,
                'Content-Type': 'application/json'
            }
        })
            .then(res =>  dispatch({
                type: FETCH_REPORTS_SUCCESS,
                payload: {
                    pending: false,
                    monitorReports: res.data
                }
            }, console.log("monitor reports success -- ", res.data)))
            .catch(err => {
                dispatch({
                    type: FETCH_REPORTS_FAIL,
                }, console.log("error monitor reports --",err))
            });
    }
};