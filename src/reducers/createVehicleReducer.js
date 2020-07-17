import {
  CREATE_VEHICLE_PENDING,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_FAIL,
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_VEHICLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case CREATE_VEHICLE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case CREATE_VEHICLE_FAIL:
      return {
        ...state,
        error: null,
        pending: false,
      };
    default:
      return state;
  }
}
