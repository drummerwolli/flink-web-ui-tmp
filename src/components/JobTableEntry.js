import React from 'react'
import PropTypes from 'prop-types'
import Badge from "react-bootstrap/lib/Badge";
import moment from 'moment'
import {convertMilliSecondsToHumanReadable, getBackgroundColorFromStatus} from "../utils";


const JobTableEntry = ({ job, endTimeExisting }) => (
	<tr>
		<td>{job["start-time"] > 0 ? moment.unix(job["start-time"]/1000).format() : ""}</td>
		{endTimeExisting ? <td>{job["end-time"] > 0 ? moment.unix(job["end-time"]/1000).format() : ""}</td> : null}
		<td>{convertMilliSecondsToHumanReadable(job.duration)}</td>
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
