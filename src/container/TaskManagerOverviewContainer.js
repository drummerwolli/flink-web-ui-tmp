import {connect} from 'react-redux';
import { fetchTaskManagers} from '../actions';
import TaskManagerOverview from "../components/TaskManagerOverview";

const mapStateToProps = state => {
	let slotsUsed = 0;
	state.taskManagers.items.map((i) => slotsUsed = slotsUsed + i.slotsNumber - i.freeSlots)
	let totalSlots = 0;
	state.taskManagers.items.map((i) => totalSlots = totalSlots + i.slotsNumber)
	let cpuCores = 0;
	state.taskManagers.items.map((i) => cpuCores = cpuCores + i.hardware.cpuCores)
	const slotsUsedPercentage = (slotsUsed / totalSlots * 100).toFixed(1)
	return {
		taskManagers: state.taskManagers,
		slotsUsedPercentage,
		cpuCores
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchTaskManagers())
};

const TaskManagerOverviewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskManagerOverview);

export default TaskManagerOverviewContainer
