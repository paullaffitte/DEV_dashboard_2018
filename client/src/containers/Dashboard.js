import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionCreators from '../state/actions';
import { Button } from 'antd';
import Drawer from 'rmc-drawer';

import 'rmc-drawer/assets/index.css';
import './Dashboard.css';

class Dashboard extends Component {
	state = {
		drawerIsOpen: false,
	}

	Sidebar = (
		<div className="Drawer__sidebar">
			<Button
				style={{ marginLeft: 16 }}
				onClick={this.props.actions.logout}
				type="danger"
			>
				Logout
			</Button>
		</div>
	);

	toggleDrawer = (isOpen) => {
		this.setState({ drawerIsOpen: isOpen });
	}

	render() {
		return (
			<div className="Dashboard">
				<Drawer
					className="Drawer"
					open={this.state.drawerIsOpen}
					onOpenChange={this.toggleDrawer}
					position="right"
					sidebar={this.Sidebar}
				>
					<Button
						className="Dashboard__openButton"
						shape="circle"
						icon="plus"
						size="large"
						onClick={() => this.toggleDrawer(true)}
					/>
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.app.currentUser,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
