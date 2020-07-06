import {
    LOGIN_INPUT_VALIDATED,
    LOGIN_VALIDATION_ERROR
} from "../constants";

const initialState = {
    error : "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_INPUT_VALIDATED:
            return {
                ...state,
                error: action.payload,
            };
        case LOGIN_VALIDATION_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}