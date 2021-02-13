import { combineReducers } from "redux";

function trips(state =[], action){
    switch (action.type) {
        case "SET_TRIPS":
            return [...state, action.payload]
        case 'GET_TRIPS':
              return action.payload;
        default:
            return state;
    }
  }

function passenger(state={}, action) {
    switch (action.type) {
        case 'SET_PASSENGER':
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    trips,
    passenger,
  });
  