import React, {Component} from 'react';
import logo from './flink-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/lib/Navbar';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import OverviewDashboard from './OverviewDashboard'
import DashboardHeaderContainer from "./container/DashboardHeaderContainer";

class App extends Component {
	render() {
		return (
			<div>
				<div id="sidebar">
					<Navbar id="sidebar-navbar" bg="dark" variant="dark">
						<Navbar.Brand href="#home">
							<img
								alt=""
								src={logo}
								width="30"
								height="30"
								className="d-inline-block align-top"
							/>
							&nbsp;&nbsp;&nbsp;Apache Flink
						</Navbar.Brand>
					</Navbar>
					<Navbar bg="dark" variant="dark">
						<ListGroup defaultActiveKey="#link1">
							<ListGroup.Item variant="dark" action href="#link1">
								<FontAwesomeIcon icon="tachometer-alt" className="fa-fw"/>&nbsp;Overview
							</ListGroup.Item>
							<ListGroup.Item variant="dark" action href="#link2">
								<FontAwesomeIcon icon="tasks" className="fa-fw"/>&nbsp;Running&nbsp;Jobs
							</ListGroup.Item>
							<ListGroup.Item variant="dark" action href="#link3">
								<FontAwesomeIcon icon="check-circle" className="fa-fw"/>&nbsp;Completed&nbsp;Jobs
							</ListGroup.Item>
							<ListGroup.Item variant="dark" action href="#link4">
								<FontAwesomeIcon icon="sitemap" className="fa-fw"/>&nbsp;Task&nbsp;Managers
							</ListGroup.Item>
							<ListGroup.Item variant="dark" action href="#link5">
								<FontAwesomeIcon icon="server" className="fa-fw"/>&nbsp;Job&nbsp;Manager
							</ListGroup.Item>
							<ListGroup.Item variant="dark" action href="#link6">
								<FontAwesomeIcon icon="upload" className="fa-fw"/>&nbsp;Submit new Job
							</ListGroup.Item>
						</ListGroup>
					</Navbar>
					<Navbar bg="dark" variant="dark" id="filler-sidebar">

					</Navbar>
				</div>
				<div id="content">
					<DashboardHeaderContainer />
					<OverviewDashboard />
				</div>
			</div>
		);
	}
}

export default App;
