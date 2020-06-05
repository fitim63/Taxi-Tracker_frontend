import {
    SIGN_UP
} from "../constants";
import axios from "axios";

export const signup = ({ email, password }) => async dispatch => {

    let data = {
        'username': email,
        'password': password,
    };

    const response = await axios.post('http://localhost:8080/login', data);

    console.log(response.data);
    if (response.data) {
        dispatch({ type: AUTH_USER, payload: response.data});
    }
};

export const signOut = auth => {
    return {
        type: SIGN_OUT,
        payload: SIGN_OUT
    };
};
