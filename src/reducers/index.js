import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import reportReducer from "./getReportsReducer";
import userDetailsReducer from "./userDetailsReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  err: errorReducer,
  reports: reportReducer,
  userDetails: userDetailsReducer,
});

export default allReducers;
