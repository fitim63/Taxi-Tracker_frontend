import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
});

export default allReducers;
