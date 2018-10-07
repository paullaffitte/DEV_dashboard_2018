import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const email = event.target.email.value;
        const password = event.target.password.value;
        this.props.onLogin(email, password);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type='user' />} placeholder='Email' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type='lock' />} type='password' placeholder='Password' />
          )}
        </Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button' size='large' >
          Log in
        </Button>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
