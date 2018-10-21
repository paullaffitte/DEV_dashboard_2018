import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ActionCreators from '../state/actions';
import {Button, Drawer} from 'antd';
import GridLayout from 'react-grid-layout';
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

	onUpdateWidget = (name, values) => {
		this.props.actions.updateWidget(name, values);
	}

	getClientWidth = () => {
		const w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			x = w.innerWidth || e.clientWidth || g.clientWidth;
		return x;
	}

	renderWidgets() {
		let x = 0, y = 0;
		return this.props.widgets.map((widget, i) => {
			x += 2;
			return (
				<div key={i}>
					<Widget
						data-grid={{i: i, x: x, y: 0, w: widget.w, h: widget.h}}
						key={i}
						id={widget.id}
						name={widget.name}
						config={widget.config}
						onRemove={this.onRemoveWidget}
						onUpdate={this.onUpdateWidget}
						user={this.props.currentUser}
					/>
				</div>
			);
		});
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
						style={{zIndex: 99}}
					/>
					<Button
						className="Dashboard__redoTourButton"
						shape="circle"
						icon="reload"
						size="small"
						onClick={this.props.redoTour}
						style={{zIndex: 99}}
					/>
					<GridLayout className="layout" cols={10} rowHeight={100} width={this.getClientWidth()}>
						{this.renderWidgets()}
					</GridLayout>
				</div>
				<Drawer
					title="Widgets"
					placement="right"
					closable={false}
					width={420}
					onClose={() => this.toggleDrawer(false)}
					visible={this.state.drawerIsOpen}
				>
					<div className="Drawer">
						<WidgetList
							onWidgetClick={this.setWidgetForm}
							user={this.props.currentUser}
							subscribeService={this.props.actions.subscribeService}
						/>
						<Button
							style={{marginTop: 16, marginRight: 5}}
							onClick={this.props.actions.logout}
							type="danger"
						>
							Logout
						</Button>
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Dashboard);
