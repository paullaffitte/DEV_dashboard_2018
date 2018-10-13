import React, { Component } from 'react';
import { Form, Icon, Input, Button, Alert } from 'antd';
import Services from '../../constants/Services';

class GithubExample extends Component {

  state = {
  }

  componentWillMount() {
    this.update();
  }

  update() {
  }

  render() {
    const accessToken = this.props.user.github.accessToken;
    return (
      <span>{accessToken}</span>
    );
  }
}

class __GithubExampleForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('something', {
            rules: [{ required: true, message: 'Please enter something.' }],
          })(
            <Input prefix={<Icon type='environment' />} placeholder='Something' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const GithubExampleForm = Form.create()(__GithubExampleForm);

export {
  GithubExampleForm,
};

export default GithubExample;
