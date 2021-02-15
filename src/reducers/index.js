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

  function seatItems(state = [], action) {
    switch (action.type) {
        case "SET_SEAT_ITEMS":
            return action.payload
        case "BOOK_SEAT":
            // push in an immutable way
            return [...state, action.payload]
        case "UNBOOK_SEAT":
            return state.filter(seatItem => seatItem.id != action.payload);
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
    seatItems,
    passenger,
  });
  