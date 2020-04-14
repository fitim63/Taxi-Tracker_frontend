import {SIGN_IN } from "../constants";

const initialState = {
  isSignedIn: false
};

export const signInReducer = (state = initialState, action) => {
    if (action.type === SIGN_IN) {
        return action.payload;
    } else {
        return state;
    }
};
