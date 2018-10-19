import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Globals from '../../constants/Globals';
import Services from '../../constants/Services';
import './Twitter.css';
import './Github.css';

class TwitterAccount extends Component {

  state = {
    frameUri: `https://twitter.com/${this.props.config.screenView}?ref_src=twsrc%5Etfw`
  }

  componentWillMount() {
    this.props.setChildRef(this);
    console.log(this.props)
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }

  update() {
  }

  render() {
    return (
      <div className='scrollable'>
        <a style={{display: 'none'}} className='twitter-timeline' href={this.state.frameUri}></a>
      </div>
    );
  }
}

class __TwitterAccountForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('screenView', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix='@' placeholder='thomasarbona' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const TwitterAccountForm = Form.create()(__TwitterAccountForm);

export {
  TwitterAccountForm,
};

export default TwitterAccount;
