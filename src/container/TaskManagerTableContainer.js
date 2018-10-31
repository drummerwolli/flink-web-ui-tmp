import {connect} from 'react-redux';
import {fetchTaskManagers} from '../actions';
import TaskManagerTable from '../components/TaskManagerTable';

const mapStateToProps = state => {
	return {
		taskManagers: state.taskManagers,
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchTaskManagers())
};

const TaskManagerTableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskManagerTable);

export default TaskManagerTableContainer
