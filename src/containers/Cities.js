
import { connect } from 'react-redux';
import Cities from '../components/Cities';
import {getTrips} from '../actions';

function mapStateToProps(state) {
	return {
		trips: state.trips,
	};
}
const mapDispatchToProps = {
	getTrips,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
