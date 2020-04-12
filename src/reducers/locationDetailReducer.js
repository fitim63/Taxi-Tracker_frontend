import { GET_LOCATION_DETAIL } from "../constants";

const initialState = {
    latitude: null,
    longitude: null
};

export const locationReducer = (state = initialState, action) => {
    if (action.type === GET_LOCATION_DETAIL) {
        return action.payload;
    } else {
        return state;
    }
};
