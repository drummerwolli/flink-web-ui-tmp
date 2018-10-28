import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import JobTable from '../components/JobTable';

const mapStateToProps = state => {
	return {
		jobs: {items: state.jobs.items.filter(j => j.state == 'RUNNING')}
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchJobs())
};

const RunningJobTableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(JobTable);

export default RunningJobTableContainer
