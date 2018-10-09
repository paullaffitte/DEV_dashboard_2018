import React, { Component } from 'react';
import { Card } from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';

class Widget extends Component {

  render() {
    const WidgetComponent = Widgets[this.props.name].component;
    let title = Widgets[this.props.name].title;

    if (typeof title === 'function') {
      title = title(this.props.config);
    }

    return (
      <Card
        title={title}
        className="Widget"
        style={{ width: 'min-content' }}
      >
        <WidgetComponent
          config={this.props.config}
        />
      </Card>
    );
  }
}

Widget.propTypes = {
  name: PropTypes.string,
  config: PropTypes.object,
};

export default Widget;
