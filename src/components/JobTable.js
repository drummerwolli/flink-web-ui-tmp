import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import JobTableEntry from "./JobTableEntry";

const JobTable = ({ jobs }) => (
	<Table bordered hover>
		<thead>
		<tr>
			<th>Start Time</th>
			<th>End Time</th>
			<th>Duration</th>
			<th>Job Name</th>
			<th>Job ID</th>
			<th>Tasks</th>
			<th>Status</th>
		</tr>
		</thead>
		<tbody>
		{jobs.items.length > 0 ? jobs.items.map((job, index) => (
			<JobTableEntry key={index} job={job} />
		)) : undefined}
		</tbody>
	</Table>
);

JobTable.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default JobTable
