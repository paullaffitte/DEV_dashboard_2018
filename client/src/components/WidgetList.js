import React, {Component} from 'react';
import {Button} from 'antd'
import PropTypes from 'prop-types';

import SubscribeForm from './SubscribeForm';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

import "./WidgetList.css";

class WidgetList extends Component {

  state = {
    subscribeFormInputs: null,
    subscribeService: null,
  }

  subscribe = (name, method) => {
    if (typeof method === 'string') {
      window.location.href = method;
    } else if (typeof method === 'object') {
      console.log(name, method);
      this.setState({
        subscribeFormInputs: method,
        subscribeService: name,
      });
    }
  }

  onSubscribe = (values) => {
    this.props.subscribeService(this.state.subscribeService, values);
  }

  render() {
    console.log('new Render', this.props.user, this.props.user.twitter);
    return (
      <div className="WidgetList">
        {Object.keys(Services).map((serviceKey, serviceIt) => {
          const service = Services[serviceKey];
          const isValid = service.isValid === undefined || !!service.isValid(this.props.user);

          return (
            <div className="WidgetList__service" key={serviceIt}>
              <div style={{paddingBottom: 8}}>
                <img
                  alt=''
                  style={{width: 20, marginRight: 4}}
                  src={service.icon}
                />
                <span style={{fontWeight: 'bold'}}>{service.name}</span>
                {isValid || <a style={{float: 'right'}} onClick={() => (this.subscribe(serviceKey, service.subscribe))}>Subscribe</a>}
              </div>
              {Object.keys(Widgets).map((widgetKey, widgetIt) => {
                const widget = Widgets[widgetKey];
                if (widget.service !== serviceKey) {
                  return null;
                }
                return (
                  <Button
                    onClick={() => this.props.onWidgetClick(widgetKey)}
                    key={widgetIt}
                    style={{marginBottom: 5}}
                    disabled={!isValid}
                  >
                    <span style={{fontWeight: 'bold'}}>{widget.name}</span>
                    <span> - {widget.desc}</span>
                  </Button>
                )
              })}
            </div>
          );
        })}
        <SubscribeForm
          isOpen={!!this.state.subscribeFormInputs}
          onSubscribe={this.onSubscribe}
          onClose={() => (this.setState({ subscribeFormInputs: null }))}
          inputs={this.state.subscribeFormInputs}
        />
      </div>
    );
  }
}

WidgetList.propTypes = {
  onWidgetClick: PropTypes.func,
  user: PropTypes.object,
};

export default WidgetList;
