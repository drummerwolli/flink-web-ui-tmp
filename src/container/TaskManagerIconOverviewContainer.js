import {connect} from 'react-redux';
import { fetchTaskManagers} from '../actions';
import TaskManagerIconOverview from "../components/TaskManagerIconOverview";

const mapStateToProps = state => {
	return {
		taskManagers: state.taskManagers,
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchTaskManagers())
};

const TaskManagerIconOverviewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskManagerIconOverview);

export default TaskManagerIconOverviewContainer
