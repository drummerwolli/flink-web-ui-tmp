import React, {Component} from 'react';
import './OverviewDashboard.css';
import Container from 'react-bootstrap/lib/Container';
import Card from 'react-bootstrap/lib/Card';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Badge from 'react-bootstrap/lib/Badge'
import ProgressBar from 'react-bootstrap/lib/ProgressBar'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faServer, faTasks, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import RunningJobTableContainer from "./container/RunningJobTableContainer";
import NotRunningJobTableContainer from "./container/NotRunningJobTableContainer";

library.add(faServer)
library.add(faTasks)
library.add(faSignInAlt)

class OverviewDashboard extends Component {
	render() {
		const now = 60;
		const progressInstance = <ProgressBar now={now} label={`${now}%`}/>
		return (
			<Container>
				<Card>
					<Card.Body>
						<Card.Title><FontAwesomeIcon icon="server"/> Cluster</Card.Title>
						<Card.Text>
							<Row>
								<Col md={2}>
									<h6>Jobs</h6>
									<ListGroup>
										<ListGroup.Item>Running <Badge className="float-right"
																	   variant="primary">3</Badge></ListGroup.Item>
										<ListGroup.Item>Finished <Badge className="float-right"
																		variant="success">3</Badge></ListGroup.Item>
										<ListGroup.Item>Cancelled <Badge className="float-right"
																		 variant="info">3</Badge></ListGroup.Item>
										<ListGroup.Item>Failed <Badge className="float-right" variant="danger">3</Badge></ListGroup.Item>
									</ListGroup>
								</Col>
								<Col md={2}>
									<h6>Task Managers</h6>5
									<hr/>
									<h6>Task Slots Used</h6>{progressInstance}
									<hr/>
									<h6>CPU Cores</h6>45
								</Col>
								<Col md={8}>
									<h6>Job Managers</h6>
									<Row>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#51e179"}} icon="server"
															 className="fa-3x"/>
										</Col>
									</Row>
									<h6>Task Managers</h6>
									<Row>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#ffc107"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#ffc107"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#ffc107"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#dc3545"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#ffc107"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#dc3545"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
										<Col md={1}>
											<FontAwesomeIcon style={{color: "#28a745"}} icon="server"
															 className="fa-3x"/>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<h6>Metrics</h6>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
								<Col md={3}>
									<Card><Card.Body><FontAwesomeIcon icon="sign-in-alt"/> Records in: 123 Kb/s</Card.Body></Card>
								</Col>
							</Row>
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
