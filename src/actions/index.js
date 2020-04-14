import {
    AUTH_USER,
    GET_LOCATION_DETAIL,
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP
} from "../constants";
import service from "./service";
import axios from "axios";


// FETCH DATA HERE
export const fetchVehicleDetails = location => {
    return {
        type: GET_LOCATION_DETAIL,
        payload: location
    };
};

export const signup = ({ email, password }) => async dispatch => {

    let data = {
        'username': email,
        'password': password,
    };

    axios.post('http://localhost:8080/authenticate', data)
        .then(function (response) {
            dispatch({ type: AUTH_USER, payload:  response.data.token })
            console.log(response.data.token);
        })
        .catch(function (error) {
            console.log('E' +error);
        });
};

export const signIn = auth => {
    return {
        type: SIGN_IN,
        payload: auth
    };
};

export const signOut = auth => {
    return {
        type: SIGN_OUT,
        payload: SIGN_OUT
    };
};
