import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import authLoginValidationReducer from "./authLoginValidationReducer";
import authRegisterValidationReducer from "./authRegisterValidationReducer";

const allReducers = combineReducers({
  form: formReducer,
  auth: authReducer,
  error: errorReducer,
  authLoginValidation: authLoginValidationReducer,
  authRegisterValidation: authRegisterValidationReducer,
});

export default allReducers;
