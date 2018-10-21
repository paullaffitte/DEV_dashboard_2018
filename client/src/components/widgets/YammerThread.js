import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Globals from '../../constants/Globals';
import Axios from 'axios';
import './Github.css';

class YammerThread extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = async () => {
    const res = await Axios.get(`${Globals.API_URL}/yammer/messages/in_thread/${this.props.config.groupId}.json`, {
      headers: {
        authorization: `Bearer ${this.props.user.yammer.accessToken}`
      }
    });
    console.log(res);
    this.setState({
      data: {
        messages: res.data.messages.reverse(),
        references: res.data.references
      }
    });
    this.props.onTitleUpdate(this.state.data.messages[0].title + ' - Yammer');
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data.messages}
          renderItem={item => (<List.Item><a target='_blank' href={item.web_url}>{item.body.parsed}</a></List.Item>)}
        />
      </div>
    );
  }
}

class __YammerThreadForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('groupId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type='profile' />} placeholder='1173632071' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const YammerThreadForm = Form.create()(__YammerThreadForm);

export {
  YammerThreadForm,
};

export default YammerThread;
