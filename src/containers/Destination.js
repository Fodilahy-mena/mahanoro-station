import { connect } from 'react-redux';
import Destination from '../components/Destination';

function mapStateToProps(state) {
	return {
		trips: state.trips,
	};
}

export default connect(mapStateToProps, null)(Destination);
