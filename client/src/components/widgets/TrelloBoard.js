import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Trello from 'trello';
import Services from '../../constants/Services';
import './Github.css';

class TrelloBoard extends Component {

  state = {
    data: []
  }

  async componentWillMount() {
    this.client = new Trello(Services['trello'].apiKey, this.props.user.trello.accessToken);
    this.props.setChildRef(this);
  }

  update = async () => {
    this.setState({
      data: (await this.client.getCardsOnBoard(this.props.config.boardId)).map((e, idx) => ({...e, key: idx}))      // data: (await this.client.getCardsOnList(this.props.config.listId)).map((e, idx) => ({...e, key: idx}))
    });
    const board = await this.client.makeRequest('get', `/1/boards/${this.props.config.boardId}`);
    this.props.onTitleUpdate(board.name + ' Cards - Trello');
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

class __TrelloBoardForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('boardId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type="profile" theme="outlined" />} placeholder='5bae7b356e3212474dfb3b02' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const TrelloBoardForm = Form.create()(__TrelloBoardForm);

export {
  TrelloBoardForm,
};

export default TrelloBoard;
