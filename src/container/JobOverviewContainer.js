import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import JobOverview from "../components/JobOverview";

const mapStateToProps = state => {
	return {
		jobs: state.jobs,
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchJobs())
};

const JobOverviewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(JobOverview);

export default JobOverviewContainer
