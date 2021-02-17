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

function bookings(state = [], action) {
    switch (action.type) {
        case "SET_BOOKINGS":
            return action.payload
        case "BOOKING":
            // push in an immutable way
            return [...state, action.payload]
        default:
            return state;
    }

}

function seats(state=[], action) {
    switch (action.type) {
        case "SEATS":
            return action.payload
        case "ADD_TO_SEATS":
            // push in an immutable way
            return [...state, {
                ...action.payload,
                passengerFirstName: "Jerome",
                passengerLastName: "Emilien",
                passengerPhoneNumber: "034"
            }
            ]
        case "RESET_SEATS":
            return []
        default:
            return state;
    }
}


// function updatedSeat(state={}, action) {
//     switch (action.type) {
//         case "SET_UPDATED_SEAT":
//             return action.payload
//         case "ADD_TO_SEATS":
//             return {
//                 ...state,
//                 passengerFirstName: "Jerome",
//                 passengerLastName: "Emilien",
//                 passengerPhoneNumber: "034"
//             }
//         default:
//             return state;
//     }
// }


export default combineReducers({
    trips,
    seatItems,
    passenger,
    bookings,
    seats,
    // updatedSeat
  });
  