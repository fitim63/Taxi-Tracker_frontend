import {
  DELETE_VEHICLE_FAIL,
  DELETE_VEHICLE_PENDING,
  DELETE_VEHICLE_SUCCESS,
} from "../constants";
import axios from "axios";

const deleteVehicleId = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: DELETE_VEHICLE_PENDING });
  await axios
    .delete("http://localhost:8080/vehicles/?id=" + id, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch({
        type: DELETE_VEHICLE_SUCCESS,
        payload: {
          pending: false,
          data: response.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: DELETE_VEHICLE_FAIL,
      });
    });
};

export default deleteVehicleId;
