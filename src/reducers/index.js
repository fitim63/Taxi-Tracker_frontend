import { combineReducers } from "redux";
import { locationReducer } from "./locationDetailReducer";
import auth from "./auth";
import { reducer as formReducer } from "redux-form";

const allReducers = combineReducers({
  vehicleLocationDetail: locationReducer,
  auth,
    form: formReducer,
});

export default allReducers;
