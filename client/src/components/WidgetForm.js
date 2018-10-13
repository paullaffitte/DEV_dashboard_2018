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
    const widget = Widgets[this.props.widget];
    console.log(widget);
    const WidgetFormComponent = widget && widget.form;
    let title = 'Configure ' + (widget && widget.name);

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
      </Modal>
    );
  }
}

WidgetForm.propTypes = {
  name: PropTypes.string,
  config: PropTypes.object,
};

export default WidgetForm;
