import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import GitHub from 'github-api';
import './Github.css';

class GithubCommits extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.issue = new GitHub({
      token: this.props.user.github.accessToken
    }).getRepo(this.props.config.repository);
    this.update();
  }

  async update() {
    try {
      this.setState({
        data: (await this.issue.listCommits()).data.map((e, idx) => ({...e, key: idx}))
      });
    } catch (e) {
      this.setState({
        data: [
          {
            title: 'Update failed.'
          }
        ]
      });
    }
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => (<List.Item>{item.commit.message}</List.Item>)}
        />
      </div>
    );
  }
}

class __GithubCommitsForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('repository', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type='book' />} placeholder='apple/darwin-xnu' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const GithubCommitsForm = Form.create()(__GithubCommitsForm);

export {
  GithubCommitsForm,
};

export default GithubCommits;
