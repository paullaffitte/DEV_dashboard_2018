import React, { Component } from 'react';
import weather from 'openweather-apis';
import Services from '../../constants/Services';

const icons = {
  sun: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
  cloud: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
  rain: 'https://ssl.gstatic.com/onebox/weather/64/rain_light.png',
  heavy: 'https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png',
};

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
    this.update();
  }

  update() {
    weather.getAllWeather((err, json) => {
      if (!err) {
        console.log(json);
        this.setState({
          temp: json.main.temp,
          desc: json.weather[0] && json.weather[0].description,
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

export default WeatherCity;
