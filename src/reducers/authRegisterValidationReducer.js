import {
    REGISTER_VALIDATION_ERROR,
    REGISTER_INPUT_VALIDATED
} from "../constants";

const initialState = {
    error : "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_INPUT_VALIDATED:
            return {
                ...state,
                error: action.payload,
            };
        case REGISTER_VALIDATION_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}