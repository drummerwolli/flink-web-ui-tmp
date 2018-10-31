import React, {Component} from 'react';
import './OverviewDashboard.css';
import Container from 'react-bootstrap/lib/Container';
import Card from "react-bootstrap/lib/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import TaskManagerTableContainer from "./container/TaskManagerTableContainer";


class TaskManagerOverviewDashboard extends Component {
	render() {
		return (
			<Container>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="sitemap"/>&nbsp;Task&nbsp;Managers</Card.Title>
						<Card.Text>
							<TaskManagerTableContainer />
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

export default TaskManagerOverviewDashboard;
