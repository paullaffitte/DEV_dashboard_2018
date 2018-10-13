import React, { Component } from 'react';
import { List, Button, Modal } from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';
import Services from '../constants/Services';

// import "./SubscribeServiceList.css";

class SubscribeServiceList extends Component {

  renderItem = item => {
    const service = Services[item];
    const isValid = !(service.isValid && !service.isValid(this.props.user));

    return (
      <List.Item
        actions={!isValid && [<a href={service.subscribeUrl}>Subscribe</a>]}
      >
        <div style={{ opacity: isValid ? 0.5 : 1 }}>
          <img
            style={{ width: 20, height: 20, marginRight: 4 }}
            src={service.icon}
          />
          <span style={{ fontWeight: 'bold' }}>{service.name}</span>
        </div>
      </List.Item>
    );
  }

  render() {
    return (
      <Modal
        title={"Subscribe services"}
        visible={this.props.isOpen}
        onCancel={this.props.onClose}
        onOk={this.props.onClose}
        footer={[
         <Button key="ok" type="primary" onClick={this.props.onClose}>
           Ok
         </Button>,
       ]}
      >
        <div className="SubscribeServiceList">
          <List
            bordered
            dataSource={Object.keys(Services)}
            renderItem={this.renderItem}
          />
        </div>
      </Modal>
    );
  }
}

SubscribeServiceList.propTypes = {
  isOpen: PropTypes.bool,
  user: PropTypes.object,
};

export default SubscribeServiceList;
