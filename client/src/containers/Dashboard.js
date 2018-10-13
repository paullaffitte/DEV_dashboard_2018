import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionCreators from '../state/actions';
import { Button, Drawer } from 'antd';
import Widget from '../components/Widget';
import WidgetList from '../components/WidgetList';
import WidgetForm from '../components/WidgetForm';

import './Dashboard.css';

class Dashboard extends Component {
	state = {
		drawerIsOpen: false,
		widgetFormOpen: null,
	}

	setWidgetForm = (name) => {
		this.setState({ widgetFormOpen: name });
	}

	toggleDrawer = (isOpen) => {
		this.setState({ drawerIsOpen: isOpen });
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
			/>
			<Button
				style={{ marginTop: 16 }}
				onClick={this.props.actions.logout}
				type="danger"
			>
				Logout
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
					widget={this.state.widgetFormOpen}
					onAddWidget={this.onAddWidget}
					onClose={() => this.setWidgetForm(null)}
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
