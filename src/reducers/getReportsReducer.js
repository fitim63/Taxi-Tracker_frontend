import {
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_PENDING,
  FETCH_REPORTS_FAIL,
} from "../constants";

const initialState = {
  pending: false,
  data: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REPORTS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_REPORTS_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
      };
    case FETCH_REPORTS_FAIL:
      return {
        ...state,
        pending: false,
        data: null,
      };
    default:
      return state;
  }
}
