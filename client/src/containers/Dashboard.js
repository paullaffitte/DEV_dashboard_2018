import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionCreators from '../state/actions';
import { Button, Drawer } from 'antd';
import Widget from '../components/Widget';
import WidgetList from '../components/WidgetList';

import './Dashboard.css';

class Dashboard extends Component {
	state = {
		drawerIsOpen: false,
	}

	Sidebar = (
		<div className="Drawer">
			<WidgetList />
			<Button
				style={{ marginTop: 16 }}
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
				<div className="Dashboard__content">
					<Button
						className="Dashboard__openButton"
						shape="circle"
						icon="plus"
						size="large"
						onClick={() => this.toggleDrawer(true)}
					/>
					<Widget
						name="weather_city"
						config={{ city: "Montpellier" }}
					/>
				</div>
				<Drawer
          title="Widgets"
          placement="right"
          closable={false}
					width={420}
          onClose={() => this.toggleDrawer(false)}
          visible={this.state.drawerIsOpen}
        >
          {this.Sidebar}
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
