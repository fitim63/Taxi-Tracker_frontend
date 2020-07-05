import {FETCH_REPORTS_SUCCESS, FETCH_REPORTS_PENDING, FETCH_REPORTS_FAIL} from "../constants";

const initialState = {
    isAuthenticated: null,
    pending: false,
    reports: [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_REPORTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_REPORTS_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                pending: false,
                reports: action.payload
            };
        case FETCH_REPORTS_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload.error,
                reports: []
            };
        default:
            return state;
    }
};