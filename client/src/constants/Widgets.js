import WeatherCity, { WeatherCityForm } from '../components/widgets/WeatherCity';
import GithubExample, { GithubExampleForm } from '../components/widgets/GithubExample';

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
  // Simple github example widget
  github_example: {
    service: 'github',
    component: GithubExample,
    form: GithubExampleForm,
    name: 'Github Example',
    desc: 'Simple widget d\'exemple',
    title: 'Github Example',
  }
};

export default Widgets;
