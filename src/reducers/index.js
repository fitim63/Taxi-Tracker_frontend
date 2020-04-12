import {combineReducers} from "redux";
import {locationReducer} from "./locationDetailReducer";

const allReducers = combineReducers({
    vehicleLocationDetail: locationReducer
});

export default allReducers;
