import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Trello from 'trello';
import Services from '../../constants/Services';
import './Github.css';

class TrelloAssigned extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    this.client = new Trello(Services['trello'].apiKey, this.props.user.trello.accessToken);
    this.props.setChildRef(this);
  }

  update = async () => {
    this.setState({
      data: (await this.client.getMemberCards(this.props.config.userId)).map((e, idx) => ({...e, key: idx}))      // data: (await this.client.getCardsOnList(this.props.config.listId)).map((e, idx) => ({...e, key: idx}))
    });
    const user = await this.client.makeRequest('get', `/1/members/${this.props.config.userId}`);
    this.props.onTitleUpdate(user.fullName + ' - Trello');
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => (<List.Item>{item && item.name}</List.Item>)}
        />
      </div>
    );
  }
}

class __TrelloAssignedForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('memberId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type="user" theme="outlined" />} placeholder='5959f8bfae2ea5674a386fc2' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const TrelloAssignedForm = Form.create()(__TrelloAssignedForm);

export {
  TrelloAssignedForm,
};

export default TrelloAssigned;
