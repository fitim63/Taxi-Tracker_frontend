import {
    LOGIN_INPUT_VALIDATED,
    LOGIN_VALIDATION_ERROR
} from "../constants";

const handleLoginValidation = (username, password) => {
    if (username && password) {
        if (username.length < 3 && username.length > 0) {
            return {
                type: LOGIN_VALIDATION_ERROR,
                payload: 'Invalid username. Minimum 3 characters required',
            }
        } else {
            return {
                type: LOGIN_INPUT_VALIDATED,
                payload: false,
            }
        }
    }else {
        return {
            type: LOGIN_VALIDATION_ERROR,
            payload: 'Enter Data',
        }
    }
}


export default handleLoginValidation;