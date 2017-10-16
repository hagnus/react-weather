import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        //Append the new payload on the array top
        return [ action.payload.data, ...state ]
    }

    return state; 
}