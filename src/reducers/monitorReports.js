import {FETCH_REPORTS_FAIL, FETCH_REPORTS_PENDING, FETCH_REPORTS_SUCCESS} from "../constants";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    pending: false,
    monitorReports: [],
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
                monitorReports: action.payload.monitorReports
            };
        case FETCH_REPORTS_FAIL:
            return {
                ...state,
                pending: false,
                monitorReports: []
            };
        default:
            return state;
    }
};