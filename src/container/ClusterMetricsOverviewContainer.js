import {connect} from 'react-redux';
import {fetchJobs} from '../actions';
import ClusterMetricsOverview from "../components/ClusterMetricsOverview";
import { convertBytesToHumanReadable } from "../utils";


const mapStateToProps = state => {
	const physicalMem = Array.isArray(state.taskManagers.items) ? state.taskManagers.items.reduce((previousValue, item) => previousValue + item.hardware.physicalMemory, 0): 0;
	const freeMemory = Array.isArray(state.taskManagers.items) ? state.taskManagers.items.reduce((previousValue, item) => previousValue + item.hardware.freeMemory, 0): 0;
	const managedMemory = Array.isArray(state.taskManagers.items) ? state.taskManagers.items.reduce((previousValue, item) => previousValue + item.hardware.managedMemory, 0): 0;

	return {
		physicalMem: convertBytesToHumanReadable(physicalMem),
		freeMemory: convertBytesToHumanReadable(freeMemory),
		managedMemory: convertBytesToHumanReadable(managedMemory),
	}
};

const mapDispatchToProps = dispatch => {
	dispatch(fetchJobs())
};

const ClusterMetricsOverviewContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ClusterMetricsOverview);

export default ClusterMetricsOverviewContainer
