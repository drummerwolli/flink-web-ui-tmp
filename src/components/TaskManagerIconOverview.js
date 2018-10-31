import PropTypes from "prop-types";
import React from "react";
import Row from "react-bootstrap/lib/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/lib/Col";
import OverlayTrigger from "react-bootstrap/lib/OverlayTrigger";
import Tooltip from "react-bootstrap/lib/Tooltip";
import ProgressBar from "react-bootstrap/lib/ProgressBar";
import { convertBytesToHumanReadable } from "../utils";

const TaskManagerIconOverview = ({taskManagers}) => (
	<Row>
		{
			taskManagers.items.map((tm) => {
					return <Col md={1}>
						<OverlayTrigger style={{width: "1000px"}}
										placement="bottom"
										overlay={
											<Tooltip id={tm.id}>
												ID: <strong>{tm.id}</strong><br/>
												Path: <strong>{tm.path}</strong><br/>
												Total Slots: <strong>{tm.slotsNumber}</strong><br/>
												Free Slots: <strong>{tm.freeSlots}</strong><br/>
												Physical Mem: <strong>{convertBytesToHumanReadable(tm.hardware.physicalMemory)}</strong><br/>
												JVM Heap Size: <strong>{convertBytesToHumanReadable(tm.hardware.freeMemory)}</strong><br/>
												Flink Managed Mem: <strong>{convertBytesToHumanReadable(tm.hardware.managedMemory)}</strong>
											</Tooltip>
										}
						><FontAwesomeIcon style={{color: "#28a745"}} icon="server"
										  className="fa-3x"/></OverlayTrigger>
						<ProgressBar style={{
							height: "5px",
							width: "43px",
							marginLeft: "35px",
							marginTop: "-26px",
							transform: "rotate(270deg)"
						}} now={(tm.slotsNumber - tm.freeSlots) / tm.slotsNumber * 100}/>
					</Col>
				}
			)
		}
	</Row>
);

TaskManagerIconOverview.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default TaskManagerIconOverview
