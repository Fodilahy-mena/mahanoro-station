import { connect } from 'react-redux';
import Seats from '../components/Seats';
import {bookSeat, unbookSeat} from '../actions';

function mapStateToProps(state) {
	return {
		trips: state.trips,
		seatItems: state.seatItems
	};
}

const mapDispatchToProps = {
	bookSeat,
	unbookSeat
}

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
