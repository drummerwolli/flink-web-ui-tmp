import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import DashboardHeader from "../components/DashboardHeader";


const mapStateToProps = state => {
	return {
		clusterInfo: state.clusterInfo,
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchJobs())
};

const DashboardHeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DashboardHeader);

export default DashboardHeaderContainer
