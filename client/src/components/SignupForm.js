import React, { Component } from 'react';
import { Form, Icon, Input, Button, Alert } from 'antd';

class SignupForm extends Component {
  state = {
    error: null,
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const email = event.target.email.value;
        const password = event.target.password.value;
        const password2 = event.target.password2.value;

        if (password === password2) {
          this.props.onSignup({ email, password });
        } else {
          this.setState({ error: 'Password are not matching.' });
        }
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
            <Input autoComplete="off" prefix={<Icon type='user' />} placeholder='Email' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
          })(
            <Input prefix={<Icon type='lock' />} type='password' placeholder='Password' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password2', {
            rules: [{ required: true, message: 'Confirm your password!' }],
          })(
            <Input prefix={<Icon type='lock' />} type='password' placeholder='Confirm password' />
          )}
        </Form.Item>
        <Button type='primary' htmlType='submit' className='login-form-button' size='large' >
          Log in
        </Button>
        {this.state.error && <Alert message={this.state.error} type="error" />}
      </Form>
    );
  }
}

export default Form.create()(SignupForm);
