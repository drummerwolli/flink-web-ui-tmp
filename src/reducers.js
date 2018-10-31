import {combineReducers} from 'redux'
import {
	REQUEST_JOBS,
	RECEIVE_JOBS,
	REQUEST_TASK_MANAGERS,
	RECEIVE_TASK_MANAGERS,
	REQUEST_CLUSTER_INFO, RECEIVE_CLUSTER_INFO
} from "./actions";

function jobs(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_JOBS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_JOBS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.jobs,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}

function taskManagers(state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_TASK_MANAGERS:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_TASK_MANAGERS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.taskmanagers,
				lastUpdated: action.receivedAt
			})
		default:
			return state;
	}
}

function clusterInfo(state = {
	isFetching: false,
	taskmanagers: 0,
	slotsTotal: 0,
	slotsAvailable: 0,
	jobsRunning: 0,
	jobsFinished: 0,
	jobsCancelled: 0,
	jobsFailed: 0,
	flinkVersion: "n/a",
	flinkCommit: "n/a"
}, action) {
	switch (action.type) {
		case REQUEST_CLUSTER_INFO:
			return Object.assign({}, state, {
				isFetching: true
			})
		case RECEIVE_CLUSTER_INFO:
			return Object.assign({}, state, {
				isFetching: false,
				taskmanagers: 0,
				slotsTotal: 0,
				slotsAvailable: 0,
				jobsRunning: 0,
				jobsFinished: 0,
				jobsCancelled: 0,
				jobsFailed: 0,
				flinkVersion: action.clusterInfo["flink-version"],
				flinkCommit: action.clusterInfo["flink-commit"],
				lastUpdated: action.receivedAt
			});
		default:
			return state;
	}
}


const rootReducer = combineReducers({jobs, taskManagers, clusterInfo})

export default rootReducer;