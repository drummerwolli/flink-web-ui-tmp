import React from 'react'
import PropTypes from 'prop-types'
import Badge from "react-bootstrap/lib/Badge";
import moment from 'moment'

function convertSecondsToString(seconds) {
	var totalNumberOfSeconds = seconds / 1000;
	var days = parseInt(totalNumberOfSeconds / (3600 * 24));
	var hours = parseInt(totalNumberOfSeconds / 3600);
	var minutes = parseInt((totalNumberOfSeconds - (hours * 3600)) / 60);
	var seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
	var result = days > 0 ? days +'d ' + (hours < 10 ? "0" + hours : hours) + "h" : hours >= 1 ? (hours < 10 ? "0" + hours : hours) + "h " + (minutes < 10 ? "0" + minutes : minutes) + "m" : (minutes < 10 ? "0" + minutes : minutes) + "m " + (seconds < 10 ? "0" + seconds : seconds) + 's';
	return result;
}

function getBackgroundColorFromStatus(status) {
	switch (status) {
		case 'FINISHED':
			return 'success'
		case 'CANCELED':
			return 'secondary'
		case 'FAILED':
			return 'danger'
		default:
			return 'primary'
	}

}


const JobTableEntry = ({ job }) => (
	<tr>
		<td>{job["start-time"] > 0 ? moment.unix(job["start-time"]/1000).format() : ""}</td>
		<td>{job["end-time"] > 0 ? moment.unix(job["end-time"]/1000).format() : ""}</td>
		<td>{convertSecondsToString(job.duration)}</td>
		<td>{job.name}</td>
		<td>{job.jid}</td>
		<td>
			<Badge className="job-status-badge" variant="dark">{job.tasks.total}</Badge>
			<Badge className="job-status-badge" variant="secondary">{job.tasks.created}</Badge>
			<Badge className="job-status-badge" variant="secondary">{job.tasks.scheduled}</Badge>
			<Badge className="job-status-badge" variant="info">{job.tasks.deploying}</Badge>
			<Badge className="job-status-badge" variant="primary">{job.tasks.running}</Badge>
			<Badge className="job-status-badge" variant="success">{job.tasks.finished}</Badge>
			<Badge className="job-status-badge" variant="warning">{job.tasks.canceling}</Badge>
			<Badge className="job-status-badge" variant="secondary">{job.tasks.canceled}</Badge>
			<Badge className="job-status-badge" variant="danger">{job.tasks.failed}</Badge>
			<Badge className="job-status-badge" variant="secondary">{job.tasks.reconciling}</Badge>
		</td>
		<td>
			<Badge variant={getBackgroundColorFromStatus(job.state)}>{job.state}</Badge>
		</td>
	</tr>
)

JobTableEntry.propTypes = {
	jid: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default JobTableEntry
