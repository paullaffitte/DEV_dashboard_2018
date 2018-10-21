import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Globals from '../../constants/Globals';
import Axios from 'axios';
import './Github.css';

class YammerPosts extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = async () => {
    const res = await Axios.get(`${Globals.API_URL}/yammer/messages/in_group/${this.props.config.groupId}.json`, {
      headers: {
        authorization: `Bearer ${this.props.user.yammer.accessToken}`
      }
    });
    console.log(res);
    this.setState({
      data: res.data
    });
    this.props.onTitleUpdate(this.state.data.references.find(e => e.type === 'group').full_name + ' - Yammer');
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data.messages}
          renderItem={item => (<List.Item><a target='_blank' href={item.web_url}>{item.title}</a></List.Item>)}
        />
      </div>
    );
  }
}

class __YammerPostsForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('groupId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type='profile' />} placeholder='16173991' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const YammerPostsForm = Form.create()(__YammerPostsForm);

export {
  YammerPostsForm,
};

export default YammerPosts;
