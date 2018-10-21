import React, {Component} from 'react';
import {Form, Icon, Input, List, Checkbox} from 'antd';

class __SteamForm extends Component {

  state = {me: false}

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('steamid', {
            rules: [{required: !this.state.me, message: 'Please enter something.'}],
          })(
            <Input disabled={this.state.me} placeholder='https://steamcommunity.com/id/OneHandedPenguin/' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('me', {
            initialValue: false
          })(<Checkbox onChange={this.changeMe} >Me</Checkbox>)}
        </Form.Item>
      </Form>
    );
  }

  changeMe = (e) => {
    this.setState({ me: e.target.checked }, () => {
      this.props.form.validateFields(['steamid'], { force: true });
    });
  }
}

export default Form.create()(__SteamForm);