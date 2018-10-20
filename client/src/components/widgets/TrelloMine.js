import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Trello from 'trello';
import Services from '../../constants/Services';
import './Github.css';

class TrelloMine extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    this.client = new Trello(Services['trello'].apiKey, this.props.user.trello.accessToken);
    this.props.setChildRef(this);
  }

  update = async () => {
    this.setState({
      data: (await this.client.getMemberCards(this.props.user.trello.profile.id)).map((e, idx) => ({...e, key: idx}))      // data: (await this.client.getCardsOnList(this.props.config.listId)).map((e, idx) => ({...e, key: idx}))
    });
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

class __TrelloMineForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <span>This widget has no available configuration.</span>
    );
  }
}

const TrelloMineForm = Form.create()(__TrelloMineForm);

export {
  TrelloMineForm,
};

export default TrelloMine;
