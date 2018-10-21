import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';

class __SteamForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('steamid', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input placeholder='https://steamcommunity.com/id/OneHandedPenguin/' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(__SteamForm);