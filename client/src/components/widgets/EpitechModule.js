import React, {Component} from 'react';
import {Form, Icon, Input, List} from 'antd';
import Axios from 'axios';
import './Github.css';
import Globals from '../../constants/Globals';

class EpitechModule extends Component {

  state = {
    data: []
  }

  componentWillMount() {
    this.props.setChildRef(this);
  }

  update = async () => {
    const endpoint = `${Globals.API_URL}/epitech/${this.props.user.epitech.autoLogin}/module/${this.props.config.moduleId}/#!/all?format=json`;
    console.log(await Axios.get(endpoint))
    const data = (await Axios.get(endpoint)).data;
    this.setState({
      data: data.activites.reverse().map((e, i) => ({...e, key: i}))
    });
    this.props.onTitleUpdate(data.title + ' - Epitech Intra')
  }

  render() {
    return (
      <div className='scrollable'>
        <List
          dataSource={this.state.data}
          renderItem={item => {
            const itemRegisterUrl = `https://intra.epitech.eu/${this.props.user.epitech.autoLogin}/module/${this.props.config.moduleId}/${item.codeacti}`;
            return (
              <List.Item>
                <span>
                  {item.title}
                </span>
                {item.register === '1' ? <a style={{marginLeft: 5}} target='_blank' href={itemRegisterUrl}>Register</a> : <></>}
              </List.Item>
            )
          }}
        />
      </div>
    );
  }
}

class __EpitechModuleForm extends Component {
  render() {

    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('moduleId', {
            rules: [{required: true, message: 'Please enter something.'}],
          })(
            <Input prefix={<Icon type='book' />} placeholder='2018/B-INN-000/MPL-0-1' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const EpitechModuleForm = Form.create()(__EpitechModuleForm);

export {
  EpitechModuleForm,
};

export default EpitechModule;
