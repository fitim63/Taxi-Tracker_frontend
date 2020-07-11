import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import reportReducer from "./reportReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  err: errorReducer,
  reps: reportReducer
});

export default allReducers;
