import React, { Component } from 'react';
import { Card, Button } from 'antd'
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
        extra={<Button style={{ marginLeft: 16 }} icon="close" onClick={() => this.props.onRemove(this.props.id)} />}
      >
        <WidgetComponent
          config={this.props.config}
        />
      </Card>
    );
  }
}

Widget.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  config: PropTypes.object,
  onRemove: PropTypes.func,
};

export default Widget;
