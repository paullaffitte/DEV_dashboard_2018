import React, {Component} from 'react';
import {Form, Input} from 'antd';

class __LastFMArtistForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('artist', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(<Input placeholder='Rick Astley' />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(__LastFMArtistForm);
