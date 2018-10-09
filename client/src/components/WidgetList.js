import React, { Component } from 'react';
import { Button } from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

class WidgetList extends Component {

  render() {

    console.log(Object.keys(Widgets));

    return (
      <div className="WidgetList">
        {Object.keys(Widgets).map((key, i) => {
          console.log(key);
          const widget = Widgets[key];
          const service = Services[widget.service];

          return (
            <span>
              {service && (
                <div style={{ paddingBottom: 8 }}>
                  <img
                    style={{ width: 20, marginRight: 4 }}
                    src={service.icon}
                  />
                  <span>{service.name}</span>
                </div>
              )}
              <Button key={i}>
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
};

export default WidgetList;
