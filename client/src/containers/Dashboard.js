import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import ActionCreators from '../state/actions';
import { Button } from 'antd';
// import './Dashboard.css';

class Dashboard extends Component {
	state = {

	}

	logout = () => {
		this.props.actions.logout();
	}

	render() {
		return (
			<div className="Dashboard">
				<span>Hello world! {this.props.currentUser.email}</span>
				<Button
					style={{ marginLeft: 16 }}
					onClick={this.logout}
					type="danger"
				>
					Logout
				</Button>
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
