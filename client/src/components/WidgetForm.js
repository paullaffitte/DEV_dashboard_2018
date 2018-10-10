import React, { Component } from 'react';
import { Modal } from 'antd'
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
      this.props.onAddWidget(this.props.widget, values);
      this.props.onClose();
    });
  }

  render() {
    if (!this.props.widget) {
      return null;
    }

    const WidgetFormComponent = Widgets[this.props.widget].form;
    let title = 'Configure ' + Widgets[this.props.widget].name;

    return (
      <Modal
        title={title}
        visible={true}
        onCancel={this.props.onClose}
        onOk={this.validateForm}
      >
        <WidgetFormComponent
          wrappedComponentRef={this.saveFormRef}
          onAddWidget={this.props.onAddWidget}
          onClose={this.props.onClose}
        />
      </Modal>
    );
  }
}

WidgetForm.propTypes = {
  name: PropTypes.string,
  config: PropTypes.object,
};

export default WidgetForm;
