import React, {Component} from 'react';
import {Button} from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

import "./WidgetList.css";

class WidgetList extends Component {

  render() {
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
                {isValid || <a style={{float: 'right'}} href={service.subscribeUrl}>Subscribe</a>}
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
      </div>
    );
  }
}

WidgetList.propTypes = {
  onWidgetClick: PropTypes.func,
  user: PropTypes.object,
};

export default WidgetList;
