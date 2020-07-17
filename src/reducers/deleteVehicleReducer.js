import {
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAIL,
  DELETE_VEHICLE_PENDING,
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_VEHICLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case DELETE_VEHICLE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case DELETE_VEHICLE_FAIL:
      return {
        ...state,
        error: null,
        pending: false,
      };
    default:
      return state;
  }
}
