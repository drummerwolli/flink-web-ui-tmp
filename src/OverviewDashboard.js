import React, {Component} from 'react';
import './OverviewDashboard.css';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import RunningJobTableContainer from "./container/RunningJobTableContainer";
import NotRunningJobTableContainer from "./container/NotRunningJobTableContainer";
import JobOverviewContainer from "./container/JobOverviewContainer";
import TaskManagerOverviewContainer from "./container/TaskManagerOverviewContainer";
import TaskManagerIconOverviewContainer from "./container/TaskManagerIconOverviewContainer";
import ClusterMetricsOverviewContainer from "./container/ClusterMetricsOverviewContainer";


class OverviewDashboard extends Component {
	render() {
		return (
			<Container>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="server"/> Cluster</Card.Title>
						<Card.Text>
							<Row>
								<Col md={2}>
									<h6>Jobs</h6>
									<JobOverviewContainer />
								</Col>
								<Col md={2}>
									<TaskManagerOverviewContainer />
								</Col>
								<Col md={8}>
									<h6>Task Managers</h6>
									<TaskManagerIconOverviewContainer />
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<h6>Cluster Metrics</h6>
								</Col>
							</Row>
							<ClusterMetricsOverviewContainer />
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="tasks"/>&nbsp;Running&nbsp;Jobs</Card.Title>
						<Card.Text>
							<RunningJobTableContainer />
						</Card.Text>
					</Card.Body>
				</Card>
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

export default OverviewDashboard;
