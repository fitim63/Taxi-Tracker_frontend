import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import reportReducer from "./reportReducer";
import vehicleReportReducer from "./vehicleReportReducer";
import monitorReports from "./monitorReports";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  err: errorReducer,
  reps: reportReducer,
  vehicleReps: vehicleReportReducer,
  monitorReps: monitorReports,
});

export default allReducers;
