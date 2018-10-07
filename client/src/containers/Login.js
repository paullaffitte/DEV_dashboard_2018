import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Card, Tabs} from 'antd';
import ActionCreators from '../state/actions';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import './Login.css';

class Login extends Component {
	state = {

	}

	onLogin = (email, password) => {
		this.props.actions.login(email, password);
	}

	onSignup = (user) => {
		this.props.actions.createUser(user);
	}

	render() {
		return (
			<div className='Login'>
        <Card hoverable>
					<Tabs defaultActiveKey="1">
						<Tabs.TabPane tab="Login" key="1">
							<LoginForm
								onLogin={this.onLogin}
							/>
						</Tabs.TabPane>
    				<Tabs.TabPane tab="Signup" key="2">
							<SignupForm
								onSignup={this.onSignup}
							/>
						</Tabs.TabPane>
  				</Tabs>,
        </Card>
      </div>
		);
	}
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
