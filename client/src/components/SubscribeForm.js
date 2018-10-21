import React, {Component} from 'react';
import {Form, Icon, Input, InputNumber, Radio, Checkbox, Button, Modal } from 'antd';
import Globals from '../constants/Globals';

class __Form extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;

    return (
      <Form style={{textAlign: 'right'}}>
        {this.props.inputs.map((input, index) => (
          <Form.Item key={index}>
            {getFieldDecorator(input, {
              rules: [{required: true, message: 'Please enter something.'}],
            })(
              <Input placeholder={input} />
            )}
          </Form.Item>
        ))}
      </Form>
    );
  }
}

const SubForm = Form.create()(__Form);

class SubscribeForm extends Component {
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
      this.props.onSubscribe(values);
      this.props.onClose();
    });
  }

  render() {
    console.log('modal', this.props.isOpen);
    return (
      <Modal
        title={'Subscribe'}
        visible={!!this.props.isOpen}
        onCancel={this.props.onClose}
        onOk={this.validateForm}
      >
        {this.props.inputs && <SubForm
          inputs={this.props.inputs}
          wrappedComponentRef={this.saveFormRef}
        />}
      </Modal>
    );
  }
}

export default SubscribeForm;
