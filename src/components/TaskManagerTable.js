import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/lib/Table';
import TaskManagerTableEntry from "./TaskManagerTableEntry";

const TaskManagerTable = ({ taskManagers }) => (
	<Table bordered hover>
		<thead>
		<tr>
			<th>Path, ID</th>
			<th>Data Port</th>
			<th>Last Heartbeat</th>
			<th>All Slots</th>
			<th>Free Slots</th>
			<th>CPU Cores</th>
			<th>Physical Memory</th>
			<th>JVM Heap Size</th>
			<th>Flink Managed Memory</th>
		</tr>
		</thead>
		<tbody>
		{taskManagers.items.length > 0 ? taskManagers.items.map((tm, index) => (
			<TaskManagerTableEntry key={index} taskManager={tm}/>
		)) : undefined}
		</tbody>
	</Table>
);

TaskManagerTable.propTypes = {
	taskManagers: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default TaskManagerTable
