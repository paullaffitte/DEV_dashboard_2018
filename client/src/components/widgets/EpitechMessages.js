import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Axios from 'axios';
import './Github.css';
import Globals from '../../constants/Globals';

class EpitechMessages extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = async () => {
    const endpoint = `${Globals.API_URL}/epitech/${this.props.user.epitech.autoLogin}/user/notification/message?format=json`;
    this.setState({
      data: (await Axios.get(endpoint)).data.map((e, i) => ({...e, key: i}))
    });
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <div dangerouslySetInnerHTML={{__html: item.content}} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

class __EpitechMessagesForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <span>This widget has no available configuration.</span>
    );
  }
}

const EpitechMessagesForm = Form.create()(__EpitechMessagesForm);

export {
  EpitechMessagesForm,
};

export default EpitechMessages;
