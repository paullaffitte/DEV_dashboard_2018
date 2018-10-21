import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Globals from '../../constants/Globals';
import Axios from 'axios';
import './Github.css';

class YammerMessages extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = async () => {
    const res = await Axios.get(`${Globals.API_URL}/yammer/messages/received.json`, {
      headers: {
        authorization: `Bearer ${this.props.user.yammer.accessToken}`
      }
    });
    console.log(res);
    this.setState({
      data: res.data
    });
    // this.props.onTitleUpdate(this.state.data.references.find(e => e.type === 'group').full_name + ' - Yammer');
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data.messages}
          renderItem={item => (<List.Item><a target='_blank' href={item.web_url}>{item.title || item.body.plain}</a></List.Item>)}
        />
      </div>
    );
  }
}

class __YammerMessagesForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <span>This widget has no available configuration.</span>
    );
  }
}

const YammerMessagesForm = Form.create()(__YammerMessagesForm);

export {
  YammerMessagesForm,
};

export default YammerMessages;
