import {
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAIL,
  FETCH_VEHICLES_PENDING,
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_VEHICLES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case FETCH_VEHICLES_FAIL:
      return {
        ...state,
        error: null,
        pending: false,
      };
    default:
      return state;
  }
}
