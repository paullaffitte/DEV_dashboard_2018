import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ActionCreators from '../state/actions';
import Dashboard from './Dashboard';
import Login from './Login';
import './App.css';

class App extends Component {
	state = {

	}

	componentDidMount() {
		this.props.actions.getCurrentUser();
	}

	render() {
		return this.props.currentUser ? (
			<Router>
				<span>
					<Switch>
						<Route path="/" exact component={Dashboard} />
						<Redirect to="/" />
					</Switch>
				</span>
			</Router>
		) : (
				<Login />
			);
	}
}

const mapStateToProps = state => ({
	currentUser: state.app.currentUser,
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
