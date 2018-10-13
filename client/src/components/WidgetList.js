import React, { Component } from 'react';
import { Button } from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

class WidgetList extends Component {

  render() {
    return (
      <div className="WidgetList">
        {Object.keys(Widgets).map((key, i) => {
          const widget = Widgets[key];
          const service = Services[widget.service];

          return (
            <span key={i}>
              {service && (
                <div style={{ paddingBottom: 8 }}>
                  <img
                    style={{ width: 20, marginRight: 4 }}
                    src={service.icon}
                  />
                  <span>{service.name}</span>
                </div>
              )}
              <Button
                onClick={() => this.props.onWidgetClick(key)}
              >
                <span style={{ fontWeight: 'bold' }}>{widget.name}</span>
                <span> - {widget.desc}</span>
              </Button>
            </span>
          );
        })}
      </div>
    );
  }
}

WidgetList.propTypes = {
  onWidgetClick: PropTypes.func,
};

export default WidgetList;
