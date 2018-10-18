import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';

class __MinecraftForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('serverUrl', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type='link' />} placeholder='EC-MC.NET' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('port', {})(
            <Input prefix={<Icon type='link' />} placeholder='25565' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

function getPort(port) {
	return port ? (':' + port) : '';
}

export {
  getPort,
};

export default Form.create()(__MinecraftForm);