import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import reportReducer from "./getReportsReducer";
import userDetailsReducer from "./userDetailsReducer";
import getAllVehicleReducer from "./getAllVehicleReducer";
import createVehicleReducer from "./createVehicleReducer";
import deleteVehicleReducer from "./deleteVehicleReducer";
import updateVehicleReducer from "./updateVehicleReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  err: errorReducer,
  reports: reportReducer,
  userDetails: userDetailsReducer,
  createVehicle: createVehicleReducer,
  getAllVehicle: getAllVehicleReducer,
  deleteVehicle: deleteVehicleReducer,
  updateVehicle: updateVehicleReducer,
});

export default allReducers;
