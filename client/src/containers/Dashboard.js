import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ActionCreators from '../state/actions';
import {Button, Drawer} from 'antd';
import Widget from '../components/Widget';
import WidgetList from '../components/WidgetList';
import WidgetForm from '../components/WidgetForm';
import SubscribeServiceList from '../components/SubscribeServiceList';

import './Dashboard.css';

class Dashboard extends Component {
	state = {
		drawerIsOpen: false,
		subscribeServiceIsOpen: false,
		widgetFormIsOpen: null,
	}

	setWidgetForm = (name) => {
		this.setState({widgetFormIsOpen: name});
	}

	toggleDrawer = (isOpen) => {
		this.setState({drawerIsOpen: isOpen});
	}

	toggleSubscribeService = (isOpen) => {
		this.setState({subscribeServiceIsOpen: isOpen});
	}

	onAddWidget = (widget, config) => {
		this.props.actions.addWidget(widget, config);
	}

	onRemoveWidget = (id) => {
		this.props.actions.removeWidget(id);
	}

	Sidebar = (
		<div className="Drawer">
			<WidgetList
				onWidgetClick={this.setWidgetForm}
				user={this.props.currentUser}
			/>
			<Button
				style={{marginTop: 16, marginRight: 5}}
				onClick={this.props.actions.logout}
				type="danger"
			>
				Logout
			</Button>
			<Button
				style={{marginTop: 16}}
				onClick={() => this.toggleSubscribeService(true)}
			>
				Subscribe to services
			</Button>
		</div>
	);

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
					{this.props.widgets.map((widget, i) => (
						<Widget
							key={i}
							id={widget.id}
							name={widget.name}
							config={widget.config}
							onRemove={this.onRemoveWidget}
							user={this.props.currentUser}
						/>
					))}
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
				<WidgetForm
					widget={this.state.widgetFormIsOpen}
					onAddWidget={this.onAddWidget}
					onClose={() => this.setWidgetForm(null)}
				/>
				<SubscribeServiceList
					isOpen={this.state.subscribeServiceIsOpen}
					user={this.props.currentUser}
					onClose={() => this.toggleSubscribeService(false)}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.app.currentUser,
	widgets: state.app.currentUser && state.app.currentUser.widgets,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
