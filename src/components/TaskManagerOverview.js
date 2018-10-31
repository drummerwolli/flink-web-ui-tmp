import PropTypes from "prop-types";
import React from "react";
import ProgressBar from "react-bootstrap/lib/ProgressBar";

const TaskManagerOverview = ({taskManagers, slotsUsedPercentage, cpuCores}) => (
	<div>
		<h6>Task Managers</h6>{taskManagers.items.length}
		<hr/>
		<h6>Task Slots Used</h6><ProgressBar now={slotsUsedPercentage} label={`${slotsUsedPercentage}%`}/>
		<hr/>
		<h6>CPU Cores</h6>{cpuCores}
	</div>
);

TaskManagerOverview.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default TaskManagerOverview
