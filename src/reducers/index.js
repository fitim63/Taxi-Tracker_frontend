import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import reportReducer from "./getReportsReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  err: errorReducer,
  reports: reportReducer,
});

export default allReducers;
