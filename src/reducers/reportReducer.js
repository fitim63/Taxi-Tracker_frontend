import {FETCH_REPORTS_SUCCESS, FETCH_REPORTS_PENDING, FETCH_REPORTS_FAIL} from "../constants";

const initialState = {
    token: localStorage.getItem("token"),
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
                token: action.payload.token,
                isAuthenticated: true,
                pending: false,
                reports: action.payload.reports
            };
        case FETCH_REPORTS_FAIL:
            return {
                ...state,
                pending: false,
                reports: []
            };
        default:
            return state;
    }
};