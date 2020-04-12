import { GET_LOCATION_DETAIL } from "../constants";

// FETCH DATA HERE
export const fetchVehicleDetails = location => {
    return {
        type: GET_LOCATION_DETAIL,
        payload: location
    };
};
