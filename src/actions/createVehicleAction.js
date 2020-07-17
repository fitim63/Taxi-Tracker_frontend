import {
  CREATE_VEHICLE_PENDING,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_FAIL,
} from "../constants";
import axios from "axios";
const createVehicle = (form) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({ type: CREATE_VEHICLE_PENDING });
  axios({
    method: "POST",
    url: "http://localhost:8080/vehicles/createVehicle",
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
        type: CREATE_VEHICLE_SUCCESS,
        payload: {
          pending: false,
          data: response.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CREATE_VEHICLE_FAIL,
      });
    });
};
export default createVehicle;
