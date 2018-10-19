import React, {Component} from 'react';
import {Form, Icon, Input, InputNumber, List} from 'antd';
import Axios from 'axios';

class DataAtWorkSkills extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    try {
      let job = (await Axios.get('https://api.dataatwork.org/v1/jobs/autocomplete', { params: {contains: this.props.config.job} })).data.pop();
      if (!job)
        throw new Error(`No job found with name "${this.props.config.job}".`);

      this.setState({
        data: (await Axios.get(`https://api.dataatwork.org/v1/jobs/${job.uuid}/related_skills`)).data.skills
      });
    } catch (e) {
      console.error(e);
      this.setState({ data: [{title: 'Update failed.'}] });
    }
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => (<List.Item>{item.skill_name}</List.Item>)}
        />
      </div>
    );
  }
}

class __DataAtWorkSkillsForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('job', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type="book" />} placeholder='physicist / engineer / commercial / ...' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const DataAtWorkSkillsForm = Form.create()(__DataAtWorkSkillsForm);

export {
  DataAtWorkSkillsForm,
};

export default DataAtWorkSkills;
