import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {convertBytesToHumanReadable} from "../utils";


const TaskManagerTableEntry = ({ taskManager }) => (
	<tr>
		<td>{taskManager.path}<br /><small>{taskManager.id}</small></td>
		<td>{taskManager.dataPort}</td>
		<td>{taskManager.timeSinceLastHeartbeat > 0 ? moment.unix(taskManager.timeSinceLastHeartbeat/1000).format() : ""}</td>
		<td>{taskManager.slotsNumber}</td>
		<td>{taskManager.freeSlots}</td>
		<td>{taskManager.hardware.cpuCores}</td>
		<td>{convertBytesToHumanReadable(taskManager.hardware.physicalMemory)}</td>
		<td>{convertBytesToHumanReadable(taskManager.hardware.freeMemory)}</td>
		<td>{convertBytesToHumanReadable(taskManager.hardware.managedMemory)}</td>
	</tr>
)

TaskManagerTableEntry.propTypes = {
	id: PropTypes.string.isRequired,
	state: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
}

export default TaskManagerTableEntry
