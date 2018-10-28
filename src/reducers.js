import {combineReducers} from 'redux'
import {REQUEST_JOBS, RECEIVE_JOBS, REQUEST_TASK_MANAGERS, RECEIVE_TASK_MANAGERS} from "./actions";

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


const rootReducer = combineReducers({jobs, taskManagers})

export default rootReducer;