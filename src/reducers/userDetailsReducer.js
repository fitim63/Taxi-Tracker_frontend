import {
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_ERROR,
    FETCH_USER_DETAILS_LOADING,
} from "../constants";

const initialState = {
    data: null,
    isLoading: false,
    error: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_DETAILS_LOADING:
                return {
                    ...state,
                    isLoading: true,
                };
        case FETCH_USER_DETAILS_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,
            };
        case FETCH_USER_DETAILS_ERROR:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        default:
            return state;
    }
}
