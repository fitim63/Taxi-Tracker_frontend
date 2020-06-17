import { userService } from "./userService";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADING,
} from "../constants";
import axios from "axios";

export const register = (server) => async (dispatch) => {
  axios({
    method: "POST",
    url: "http://localhost:8080/createServer",
    data: {
      firstName: server.firstName,
      lastName: server.lastName,
      username: server.username,
      password: server.password,
      email: server.email,
    },
  })
    .then((user) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: user,
        },
      });
    })
    .catch((err) => {
      console.log("REGISTER_FAIL ERR: ", err);
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const login = (user) => async (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios({
    method: "POST",
    url: "http://localhost:8080/login",
    data: {
      username: user.username,
      password: user.password,
    },
  })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: response.data.token,
          isAuthenticated: true,
          isLoading: false,
          user: user,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const logout = () => (dispatch) => {
  userService.logout();
  return {
    type: LOGOUT_SUCCESS,
  };
};
