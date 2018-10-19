import React, {Component} from 'react';
import {Form, Icon, Input, InputNumber, Radio, Checkbox} from 'antd';
import Axios from 'axios';
import Globals from '../../constants/Globals';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Loripsum extends Component {

  state = {
    data: ''
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    let checkbox = (value, text) => value ? text : null;
    try {
      let options = [
        this.props.config.paragraphs,
        this.props.config.length,
        checkbox(this.props.config.decorate, 'decorate'),
        checkbox(this.props.config.link, 'link'),
        checkbox(this.props.config.ul, 'ul'),
        checkbox(this.props.config.ol, 'ol'),
        checkbox(this.props.config.dl, 'dl'),
        checkbox(this.props.config.bq, 'bq'),
        checkbox(this.props.config.code, 'code'),
        checkbox(this.props.config.headers, 'headers'),
        checkbox(this.props.config.allcaps, 'allcaps'),
        checkbox(this.props.config.prude, 'prude'),
        checkbox(this.props.config.plaintext, 'plaintext'),
      ];

      let optionsPath = options.filter(x => x).join('/');
      this.setState((await Axios.get(`${Globals.API_URL}/loripsum/${optionsPath}`)));
    } catch (e) {
      console.error(e);
      this.setState({ data: [{title: 'Update failed.'}] });
    }
  }

  render() {
    return (
      <div className="Container" dangerouslySetInnerHTML={{__html: this.state.data}}></div>
    );
  }
}

function paragraphsValidation(rule, value, callback) {
  if (value > 10)
    callback([new Error('must be <= 10')]);
  if (value <= 0)
    callback([new Error('must be > 0')]);
  callback();
}

class __LoripsumForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form>
        <Form.Item>
          {getFieldDecorator('paragraphs', {
            rules: [{required: true, message: 'Please enter something.'}, {validator: paragraphsValidation}],
            initialValue: 1
          })(
            <InputNumber placeholder='3' />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('length', {
            rules: [{required: true, message: 'Please enter something.'}],
            initialValue: 'short'
          })(
            <RadioGroup>
              <RadioButton value="short">Short</RadioButton>
              <RadioButton value="medium">Medium</RadioButton>
              <RadioButton value="long">Long</RadioButton>
              <RadioButton value="verylong">Very long</RadioButton>
            </RadioGroup>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('decorate', {
            initialValue: false
          })(<Checkbox>Bold, italic and marked text</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('link', {
            initialValue: false
          })(<Checkbox>Links</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('ul', {
            initialValue: false
          })(<Checkbox>Unordered lists</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('ol', {
            initialValue: false
          })(<Checkbox>Numbered lists</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('dl', {
            initialValue: false
          })(<Checkbox>Description lists</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('bq', {
            initialValue: false
          })(<Checkbox>Blockquotes</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('code', {
            initialValue: false
          })(<Checkbox>Code samples</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('headers', {
            initialValue: false
          })(<Checkbox>Headers</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('allcaps', {
            initialValue: false
          })(<Checkbox>ALL CAPS</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('prude', {
            initialValue: false
          })(<Checkbox>Prude version</Checkbox>)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('plaintext', {
            initialValue: false
          })(<Checkbox>Plaintext (no html)</Checkbox>)}
        </Form.Item>
      </Form>
    );
  }
}

const LoripsumForm = Form.create()(__LoripsumForm);

export {
  LoripsumForm
};

export default Loripsum;
