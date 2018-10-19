import React, { Component } from 'react';
import { Divider, Form, Icon, Input, Button } from 'antd';
import Globals from '../constants/Globals';
import './LoginForm.css';

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

  logTo = (service) => {
    return () => {
      window.location.href = Globals.API_URL + '/auth/' + service;
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="LoginForm" onSubmit={this.handleSubmit} style={{textAlign: 'right'}}>
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
        <Button className="" type='primary' htmlType='submit' block size='large'>Log in</Button>
        <Divider />
        <Button className="LoginForm__loginButton github" onClick={this.logTo('github')} icon="github" type="primary" block size='large'>Login with Github</Button>
        <Button className="LoginForm__loginButton facebook" onClick={this.logTo('facebook')} icon="facebook" type="primary" block size='large'>Login with Facebook</Button>
        <Button className="LoginForm__loginButton google" onClick={this.logTo('google')} icon="google" type="primary" block size='large'>Login with Google</Button>

      </Form>
    );
  }
}

export default Form.create()(LoginForm);
