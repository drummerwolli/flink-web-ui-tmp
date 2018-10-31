import PropTypes from "prop-types";
import React from "react";
import ListGroup from "react-bootstrap/lib/ListGroup";
import Badge from "react-bootstrap/lib/Badge";

const JobOverview = ({jobs}) => (
	<ListGroup>
		<ListGroup.Item>Running <Badge className="float-right"
									   variant="primary">{jobs.items.filter((i) => {
			return i.state === 'RUNNING'
		}).length}</Badge></ListGroup.Item>
		<ListGroup.Item>Finished <Badge className="float-right"
										variant="success">{jobs.items.filter((i) => {
			return i.state === 'FINISHED'
		}).length}</Badge></ListGroup.Item>
		<ListGroup.Item>Cancelled <Badge className="float-right"
										 variant="info">{jobs.items.filter((i) => {
			return i.state === 'CANCELLED'
		}).length}</Badge></ListGroup.Item>
		<ListGroup.Item>Failed <Badge className="float-right" variant="danger">{jobs.items.filter((i) => {
			return i.state === 'FAILED'
		}).length}</Badge></ListGroup.Item>
	</ListGroup>
);

JobOverview.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default JobOverview
