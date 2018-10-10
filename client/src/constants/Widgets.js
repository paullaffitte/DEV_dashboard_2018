import WeatherCity, { WeatherCityForm } from '../components/widgets/WeatherCity';

const Widgets = {
  // Display weather for a given city
  weather_city: {
    service: 'openWeatherMap',
    component: WeatherCity,
    form: WeatherCityForm,
    name: 'Weather City',
    desc: 'Affiche la météo d\'une ville donnée',
    title: config => (`Météo ${config.city}`),
  },

};

export default Widgets;
