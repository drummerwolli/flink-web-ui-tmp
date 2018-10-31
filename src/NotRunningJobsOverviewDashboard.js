import React, {Component} from 'react';
import './OverviewDashboard.css';
import Container from 'react-bootstrap/lib/Container';
import Card from "react-bootstrap/lib/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import NotRunningJobTableContainer from "./container/NotRunningJobTableContainer";


class NotRunningJobsOverviewDashboard extends Component {
	render() {
		return (
			<Container>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="tasks"/>&nbsp;Completed&nbsp;Jobs</Card.Title>
						<Card.Text>
							<NotRunningJobTableContainer />
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

export default NotRunningJobsOverviewDashboard;
