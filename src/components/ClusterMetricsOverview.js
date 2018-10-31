import PropTypes from "prop-types";
import React from "react";
import Col from "react-bootstrap/lib/Col";
import Card from "react-bootstrap/lib/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/lib/Row";

const ClusterMetricsOverview = ({physicalMem, freeMemory, managedMemory}) => (
	<Row>
		<Col md={3}>
			<Card><Card.Body><FontAwesomeIcon icon="memory"/> Physical Memory: {physicalMem}</Card.Body></Card>
		</Col>
		<Col md={3}>
			<Card><Card.Body><FontAwesomeIcon icon="battery-three-quarters"/> JVM Heap Size: {freeMemory}</Card.Body></Card>
		</Col>
		<Col md={3}>
			<Card><Card.Body><FontAwesomeIcon icon="handshake"/> Flink Managed Mem: {managedMemory}</Card.Body></Card>
		</Col>
	</Row>
);

ClusterMetricsOverview.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default ClusterMetricsOverview
