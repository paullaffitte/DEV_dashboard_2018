import React, {Component} from 'react';
import {Modal, Icon, Input, Divider, Button} from 'antd'
import PropTypes from 'prop-types';

import Widgets from '../constants/Widgets';

class WidgetForm extends Component {

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  validateForm = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      form.resetFields();
      this.props.onAddWidget(this.props.widget, {
        ...values,
        refreshInterval: this.refreshInterval * 1000
      });
      this.props.onClose();
    });
  }

  refreshIntervalChanged = rate => {
    this.refreshInterval = rate.target.value;
  }

  widgetWasRemoved = () => {
    this.props.onRemoveWidget(this.props.widgetId);
    this.props.onClose();
  }

  render() {
    const widget = Widgets[this.props.widget];
    const WidgetFormComponent = widget && widget.form;
    let title = 'Configure ' + (widget && widget.name);

    return (
      <Modal
        title={title}
        visible={!!this.props.widget}
        onCancel={this.props.onClose}
        onOk={this.validateForm}
        footer={[
          this.props.widgetId ? <Button key='remove' type='danger' onClick={this.widgetWasRemoved}>Remove widget</Button> : <a key='remove'></a>,
          <Button key='back' onClick={this.props.onClose}>Cancel</Button>,
          <Button key='submit' type='primary' onClick={this.validateForm}>
            OK
          </Button>
        ]}
      >
        {WidgetFormComponent &&
          <WidgetFormComponent
            wrappedComponentRef={this.saveFormRef}
            onAddWidget={this.props.onAddWidget}
            onClose={this.props.onClose}
          />
        }
        <Divider></Divider>
        <Input onChange={this.refreshIntervalChanged} prefix={<Icon type='clock-circle' />} placeholder='5' />
      </Modal>
    );
  }
}

WidgetForm.propTypes = {
  name: PropTypes.string,
  config: PropTypes.object,
};

export default WidgetForm;
