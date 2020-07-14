import axios from "axios";
import {
  FETCH_REPORTS_FAIL,
  FETCH_REPORTS_PENDING,
  FETCH_REPORTS_SUCCESS,
} from "../constants";

const token = localStorage.getItem("token");

export const fetchReportsPending = () => ({
  type: FETCH_REPORTS_PENDING,
});

export const getReportsAction = (id) => async (dispatch) => {
  const reportsUrl = [
    "http://localhost:8080/vehicles/vehicle-reports",
    "http://localhost:8080/driver-work-schedule",
    "http://localhost:8080/drivers/getAll",
    "http://localhost:8080/servers/getAll",
  ];
  dispatch(fetchReportsPending());
  await axios
    .get(reportsUrl[id], {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({
        type: FETCH_REPORTS_SUCCESS,
        payload: {
          pending: false,
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch(
        {
          type: FETCH_REPORTS_FAIL,
        },
        console.log("error", err)
      );
    });
};
