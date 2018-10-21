import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import ActionCreators from '../state/actions';
import Dashboard from './Dashboard';
import Login from './Login';
import Joyride from 'react-joyride';
import './App.css';

class App extends Component {
    state = {
        run: !localStorage.getItem('tourDone'),
        steps: [
          {
            target: '.Dashboard__openButton',
            content: 'Cliquez pour découvrir notre liste de widgets',
            placement: 'bottom',
          },
          {
            target: '.Dashboard__openButton',
            content: 'Vous pouvez ajouter un widget en cliquant sur un d\'eux dans la liste' ,
            placement: 'center',
          },
          {
            target: '.Dashboard__openButton',
            content: 'Ainsi que vous abonner à un service authentifié' ,
            placement: 'center',
          },
          {
            target: '.Dashboard__redoTourButton',
            content: 'Pour revoir ce tutoriel, cliquez sur ce bouton' ,
            placement: 'top',
          },
        ]
    };

    componentDidMount() {
        this.props.actions.getCurrentUser();
        console.log(!localStorage.getItem('tourDone'));
    }

    render() {
        const { steps, run } = this.state;

        return this.props.currentUser ? (
            <Router>
                <span>
                    <Dashboard
                        ref={c => this.dashboardRef = c }
                        redoTour={async () => {
                            await this.setState({run: true});
                            console.table(this.state);
                        }}/>
                    <Joyride
                        steps={steps}
                        run={run}
                        callback={this.joyrideCallback}
                        showProgress={true}
                        showSkipButton={true}
                        continuous={true}
                        spotlightClicks={true}
                        locale={{ back: 'Précédent', close: 'Fermer', last: 'Terminé', next: 'Suivant', skip: 'Passer' }}
                        />
                </span>
            </Router>
        ) : (
                <Login />
            );
    }

    joyrideCallback = async ({action, index, type}) => {
        if (type == 'tour:end') {
            this.dashboardRef.getWrappedInstance().toggleDrawer(true);
            localStorage.setItem('tourDone', true);
        }
    };
}

const mapStateToProps = state => ({
    currentUser: state.app.currentUser,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
