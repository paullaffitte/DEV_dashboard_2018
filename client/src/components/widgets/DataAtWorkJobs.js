import React, {Component} from 'react';
import {Form, Icon, Input, InputNumber, List} from 'antd';
import Axios from 'axios';

class DataAtWorkJobs extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.update();
  }

  async update() {
    try {
      let skill = (await Axios.get('http://api.dataatwork.org/v1/skills/normalize', { params: {skill_name: this.props.config.skill} })).data.pop();
      if (!skill)
        throw new Error(`No skill found with name "${this.props.config.skill}".`);

      this.setState({
        data: (await Axios.get(`http://api.dataatwork.org/v1/skills/${skill.uuid}/related_jobs`)).data.jobs
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
          renderItem={item => (<List.Item>{item.job_title}</List.Item>)}
        />
      </div>
    );
  }
}

class __DataAtWorkJobsForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('skill', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type="book" />} placeholder='english language / originality / mathematics / ...' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const DataAtWorkJobsForm = Form.create()(__DataAtWorkJobsForm);

export {
  DataAtWorkJobsForm,
};

export default DataAtWorkJobs;
