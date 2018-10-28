export const REQUEST_JOBS = 'REQUEST_JOBS';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const FETCH_JOBS_FAILED = 'FETCH_JOBS_FAILED';
export const REQUEST_TASK_MANAGERS = 'REQUEST_TASK_MANAGERS';
export const RECEIVE_TASK_MANAGERS = 'RECEIVE_TASK_MANAGERS';
export const FETCH_TASK_MANAGERS_FAILED = 'FETCH_TASK_MANAGERS_FAILED';

const baseUrl = 'http://172.31.128.103:8081'

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
	console.log(taskmanagers)
	return {type: RECEIVE_TASK_MANAGERS, taskmanagers, receivedAt: Date.now()};
}

export function fetchTaskManagers() {
	return function (dispatch) {
		dispatch(requestTaskManagers());
		return fetch(`${baseUrl}/taskmanagers`)
			.then(response => response.json(),
				error => console.error('An error occurred.', error))
			.then(json =>
				dispatch(receiveTaskManagers(json.taskmanagers))
			);
	}
}