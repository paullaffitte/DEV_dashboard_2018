import React, {Component} from 'react';
import {Modal, Button, Divider, Input, Icon} from 'antd'
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

  render() {
    const widget = Widgets[this.props.widget];
    const WidgetFormComponent = widget && widget.form;
    let title = (this.props.update ? 'Update ' : 'Configure ') + (widget && widget.name);

    return (
      <Modal
        title={title}
        visible={!!this.props.widget}
        onCancel={this.props.onClose}
        onOk={this.validateForm}
      >
        {WidgetFormComponent &&
          <WidgetFormComponent
            wrappedComponentRef={this.saveFormRef}
            onAddWidget={this.props.onAddWidget}
            onClose={this.props.onClose}
          />
        }
        <Divider />
        <Input onChange={this.refreshIntervalChanged} prefix={<Icon type='clock-circle' />} placeholder='20' />
        {this.props.update && (
          <div>
            <Divider />
            <Button block type="danger" onClick={this.props.onDelete}>Remove widget</Button>
          </div>
        )}
      </Modal>
    );
  }
}

WidgetForm.propTypes = {
  name: PropTypes.string,
  config: PropTypes.object,
  update: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default WidgetForm;
