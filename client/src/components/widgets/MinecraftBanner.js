import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Axios from 'axios';

class MinecraftBanner extends Component {

  state = {}

  componentWillMount() {
    this.update();
  }

  async update() {

  }

  render() {
    let port = this.props.config.port ? (':' + this.props.config.port) : '';
    return (<img src={`https://use.gameapis.net/mc/query/banner/${this.props.config.serverUrl}${port}`} />);
  }
}

class __MinecraftBannerForm extends Component {
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

const MinecraftBannerForm = Form.create()(__MinecraftBannerForm);

export {
  MinecraftBannerForm,
};

export default MinecraftBanner;
