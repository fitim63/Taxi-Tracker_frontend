import {
  EDIT_VEHICLE_FAIL,
  EDIT_VEHICLE_PENDING,
  EDIT_VEHICLE_SUCCESS,
} from "../constants";
import axios from "axios";

const editVehicleById = (form) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: EDIT_VEHICLE_PENDING });
  axios({
    method: "PUT",
    url: "http:localhost:8080/vehicles/?id=",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    data: {
      status: form.vehicleStatus,
      fuelType: form.vehicleFuelType,
      name: form.vehicleName,
      model: form.vehicleModel,
    },
  })
    .then((response) => {
      dispatch({
        type: EDIT_VEHICLE_SUCCESS,
        payload: {
          pending: false,
          data: response.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: EDIT_VEHICLE_FAIL,
      });
    });
};
export default editVehicleById;
