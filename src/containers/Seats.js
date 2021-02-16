import { connect } from 'react-redux';
import Seats from '../components/Seats';
import {bookSeat, unbookSeat, booking} from '../actions';

function mapStateToProps(state) {
	return {
		trips: state.trips,
		seatItems: state.seatItems,
		bookings: state.bookings
	};
}

const mapDispatchToProps = {
	bookSeat,
	unbookSeat,
	booking,
}

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
