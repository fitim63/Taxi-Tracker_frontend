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

export const register = () => async (dispatch, server) => {
  await userService
    .registerNewServer(server)
    .then((user) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          user: server,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      console.log("ERROR: ", err);
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
    .then((token) => {
      localStorage.setItem("token", token.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: token.data,
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
