export const REQUEST_CLUSTER_INFO = 'REQUEST_CLUSTER_INFO';
export const RECEIVE_CLUSTER_INFO = 'RECEIVE_CLUSTER_INFO';
export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const REQUEST_TASK_MANAGERS = 'REQUEST_TASK_MANAGERS';
export const RECEIVE_TASK_MANAGERS = 'RECEIVE_TASK_MANAGERS';

const baseUrl = 'http://172.31.140.204:8081'

export function requestJobs() {
	return {type: REQUEST_JOBS};
}

export function receiveJobs(jobs) {
	return {type: RECEIVE_JOBS, jobs, receivedAt: Date.now()};
}

export function fetchJobs() {
	return function (dispatch) {
		dispatch(requestJobs());
		return fetch(`${baseUrl}/jobs/overview`)
			.then(response => response.json(),
				error => console.error('An error occurred.', error))
			.then(json =>
				dispatch(receiveJobs(json.jobs))
			);
	}
}

export function requestTaskManagers() {
	return {type: REQUEST_TASK_MANAGERS};
}

export function receiveTaskManagers(taskmanagers) {
	return {type: RECEIVE_TASK_MANAGERS, taskmanagers, receivedAt: Date.now()};
}

export const fetchTaskManagers = () => (dispatch) => {
	dispatch(requestTaskManagers());
	return fetch(`${baseUrl}/taskmanagers`)
		.then(response => response.json(),
			error => console.error('An error occurred.', error))
		.then(json =>
			dispatch(receiveTaskManagers(json.taskmanagers))
		);
}

export function requestClusterInfo() {
	return {type: REQUEST_CLUSTER_INFO};
}

export function receiveClusterInfo(clusterInfo) {
	return {type: RECEIVE_CLUSTER_INFO, clusterInfo, receivedAt: Date.now()};
}

export const fetchClusterInfo = () => (dispatch) => {
	dispatch(requestClusterInfo());
	return fetch(`${baseUrl}/overview`)
		.then(response => response.json(),
			error => console.error('An error occurred.', error))
		.then(json =>
			dispatch(receiveClusterInfo(json))
		);
}