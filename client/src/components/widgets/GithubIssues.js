import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import GitHub from 'github-api';

class GithubIssues extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.issue = new GitHub({
      token: this.props.user.github.accessToken
    }).getIssues(this.props.config.repository);
    this.update();
  }

  async update() {
    try {
      this.setState({
        data: (await this.issue.listIssues()).data.map((e, idx) => ({...e, key: idx}))
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
      <List
        bordered
        dataSource={this.state.data}
        renderItem={item => (<List.Item>{item.title}</List.Item>)}
      />
    )
  }
}

class __GithubIssuesForm extends Component {
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

const GithubIssuesForm = Form.create()(__GithubIssuesForm);

export {
  GithubIssuesForm,
};

export default GithubIssues;
