import {
    FETCH_USER_DETAILS_SUCCESS,
    FETCH_USER_DETAILS_ERROR,
    FETCH_USER_DETAILS_LOADING,
} from "../constants";
import axios from "axios";

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");

export const fetchUserDetails = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_DETAILS_LOADING});

    console.log(username);
    await axios({
        method: "GET",
        url: "http://localhost:8080/servers/getByUsername/?username="+username,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            console.log("Response in FETCH_USER_DETAILS_SUCCESS", response);
            dispatch({
                type: FETCH_USER_DETAILS_SUCCESS,
                payload: {
                    data: {
                        username: response.data.username,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        isLoading: false,
                    }
                },
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FETCH_USER_DETAILS_ERROR,
            });
        });
};

export const changePasswordAction = () => async (dispatch) => {

    console.log(username);
    await axios({
        method: "POST",
        url: "http://localhost:8080/servers/getByUsername/?username="+username,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            console.log("Response in FETCH_USER_DETAILS_SUCCESS", response);
            dispatch({
                type: FETCH_USER_DETAILS_SUCCESS,
                payload: {
                    data: {
                        username: response.data.username,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        isLoading: false,
                    }
                },
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FETCH_USER_DETAILS_ERROR,
            });
        });
};