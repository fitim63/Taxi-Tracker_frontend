import {
  EDIT_VEHICLE_PENDING,
  EDIT_VEHICLE_SUCCESS,
  EDIT_VEHICLE_FAIL,
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EDIT_VEHICLE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case EDIT_VEHICLE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case EDIT_VEHICLE_FAIL:
      return {
        ...state,
        error: null,
        pending: false,
      };
    default:
      return state;
  }
}
