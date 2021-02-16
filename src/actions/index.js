export function setTrips(trips){
    return {
      type: "SET_TRIPS",
      payload: trips
    }
}

export function getTrips() {
	return async (dispatch) => {
		const response = await fetch(`https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`);
		const trips = await response.json();
		dispatch({
			type: 'GET_TRIPS',
			payload: trips,
		});
	};
}

export function setSeatItems(seatItems){
    return {
      type: "SET_SEAT_ITEMS",
      payload: seatItems
    }
  }

export function bookSeat(seat) {
    return {
    type: "BOOK_SEAT",
    payload: seat
    }
}

export function unbookSeat(id) {
    return {
    type: "UNBOOK_SEAT",
    payload: id
    }
}
  

export function setPassenger(passenger) {
    return {
        type: "SET_PASSENGER",
        payload: passenger
    }
}

export function setBookings(bookings){
  return {
    type: "SET_BOOKINGS",
    payload: bookings
  }
}

export function booking(booking) {
  return {
  type: "BOOKING",
  payload: booking
  }
}


