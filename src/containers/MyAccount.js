import { connect } from 'react-redux';
import MyAccount from '../components/MyAccount';

function mapStateToProps(state) {
	return {
		passenger: state.passenger,
	};
}

export default connect(mapStateToProps, null)(MyAccount);
