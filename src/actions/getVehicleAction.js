import {
  FETCH_VEHICLES_FAIL,
  FETCH_VEHICLES_PENDING,
  FETCH_VEHICLES_SUCCESS,
} from "../constants";
import axios from "axios";

const getAllVehiclesAction = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: FETCH_VEHICLES_PENDING });
  await axios
    .get("http://localhost:8080/vehicles/getAll", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({
        type: FETCH_VEHICLES_SUCCESS,
        payload: {
          pending: false,
          data: response.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_VEHICLES_FAIL,
      });
    });
};

export default getAllVehiclesAction;
