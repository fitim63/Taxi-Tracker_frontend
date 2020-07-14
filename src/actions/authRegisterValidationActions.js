import {
    REGISTER_INPUT_VALIDATED,
    REGISTER_VALIDATION_ERROR
} from "../constants";

const passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const emailRegex= /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

const handleRegisterValidation = (firstName, lastName, username, password, email) => {
    if (firstName && lastName && username && password && email) {
        if (username.length < 3 && username.length > 0) {
            return {
                type: REGISTER_VALIDATION_ERROR,
                payload: 'Invalid username. Minimum 3 characters required',
            }
        } else if (!passRegex.test(password)) {
            return {
                type: REGISTER_VALIDATION_ERROR,
                payload: 'Invalid password. Minimum 6 letters and numbers are required',
            }
        } else if (!emailRegex.test(email)) {
            return {
                type: REGISTER_VALIDATION_ERROR,
                payload: 'Invalid email address',
            }
        } else {
            return {
                type: REGISTER_INPUT_VALIDATED,
                payload: false,
            }
        }
    } else {
        return {
            type: REGISTER_VALIDATION_ERROR,
            payload: 'Enter Data',
        }
    }
}

export default handleRegisterValidation;