import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Trello from 'trello';
import Services from '../../constants/Services';
import './Github.css';

class TrelloColumn extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    this.client = new Trello(Services['trello'].apiKey, this.props.user.trello.accessToken);
    this.props.setChildRef(this);
  }

  update = async () => {
    this.setState({
      data: (await this.client.getCardsOnList(this.props.config.listId)).map((e, idx) => ({...e, key: idx}))
      // data: (await this.client.getMemberCards(this.props.user.trello.profile.id)).map((e, idx) => ({...e, key: idx}))      // data: (await this.client.getCardsOnList(this.props.config.listId)).map((e, idx) => ({...e, key: idx}))
    });
    const list = await this.client.makeRequest('get', `/1/lists/${this.props.config.listId}`);
    this.props.onTitleUpdate(list.name + ' - Trello');
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

class __TrelloColumnForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('listId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type="bars" theme="outlined" />} placeholder='5bae7b65aead282512100e6d' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const TrelloColumnForm = Form.create()(__TrelloColumnForm);

export {
  TrelloColumnForm,
};

export default TrelloColumn;
