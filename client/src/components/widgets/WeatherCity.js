import React, {Component} from 'react';
import {Form, Icon, Input} from 'antd';
import weather from 'openweather-apis';
import Services from '../../constants/Services';

// const icons = {
//   sun: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
//   cloud: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
//   rain: 'https://ssl.gstatic.com/onebox/weather/64/rain_light.png',
//   heavy: 'https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png',
// };

class WeatherCity extends Component {

  state = {
    temp: 0,
    desc: '',
  }

  componentWillMount() {
    weather.setLang('fr');
    weather.setCity(this.props.config.city);
    weather.setUnits('metric');
    weather.setAPPID(Services.openWeatherMap.apiKey);
    this.props.setChildRef(this);
  }

  update = () => {
    weather.getAllWeather((err, json) => {
      if (!err) {
        this.setState({
          temp: json && json.main && json.main.temp,
          desc: json && json.weather && json.weather[0] && json.weather[0].description,
        });
      }
    });
  }

  render() {
    return (
      <span>{this.state.temp} - {this.state.desc}</span>
    );
  }
}

class __WeatherCityForm extends Component {
  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form style={{textAlign: 'right'}}>
        <Form.Item>
          {getFieldDecorator('city', {
            rules: [{required: true, message: 'Please enter a city.'}],
          })(
            <Input prefix={<Icon type='environment' />} placeholder='City' />
          )}
        </Form.Item>
      </Form>
    );
  }
}

const WeatherCityForm = Form.create()(__WeatherCityForm);

export {
  WeatherCityForm,
};

export default WeatherCity;
