import PropTypes from "prop-types";
import React from "react";
import Nav from "react-bootstrap/lib/Nav";
import Navbar from "react-bootstrap/lib/Navbar";

const DashboardHeader = ({clusterInfo}) => (
	<Navbar id="overview-navbar" bg="light" variant="light">
		<Nav variant="secondary">
			<Nav.Item>
				Dashboard
			</Nav.Item>
			<Nav.Item>
				Version: {clusterInfo.flinkVersion}
			</Nav.Item>
			<Nav.Item>
				Commit: {clusterInfo.flinkCommit}
			</Nav.Item>

		</Nav>
	</Navbar>
);

DashboardHeader.propTypes = {
	jobs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
};

export default DashboardHeader
