import React, {Component} from 'react';
import './OverviewDashboard.css';
import Container from 'react-bootstrap/lib/Container';
import Card from "react-bootstrap/lib/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RunningJobTableContainer from "./container/RunningJobTableContainer";


class RunningJobsOverviewDashboard extends Component {
	render() {
		return (
			<Container>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="tasks"/>&nbsp;Running&nbsp;Jobs</Card.Title>
						<Card.Text>
							<RunningJobTableContainer />
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

export default RunningJobsOverviewDashboard;
