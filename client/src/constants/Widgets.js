import WeatherCity, {WeatherCityForm} from '../components/widgets/WeatherCity';
import GithubCommits, {GithubCommitsForm} from '../components/widgets/GithubCommits';
import GithubIssues, {GithubIssuesForm} from '../components/widgets/GithubIssues';
import GithubPullRequests, {GithubPullRequestsForm} from '../components/widgets/GithubPullRequests';

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
  github_commits: {
    service: 'github',
    component: GithubCommits,
    form: GithubCommitsForm,
    name: 'Commits',
    desc: 'Affiche les commits d\'un repository',
    title: config => `${config.repository} - Commits`,
  },
  github_issues: {
    service: 'github',
    component: GithubIssues,
    form: GithubIssuesForm,
    name: 'Issues',
    desc: 'Affiche les issues d\'un repository',
    title: config => `${config.repository} - Issues`,
  },
  github_pr: {
    service: 'github',
    component: GithubPullRequests,
    form: GithubPullRequestsForm,
    name: 'Pull Requests',
    desc: 'Affiche les pull requests d\'un repository',
    title: config => `${config.repository} - Pull Requests`,
  },
  // steam_test: {
  //   service: 'steam',
  //   component: GithubPullRequests,
  //   form: GithubPullRequestsForm,
  //   name: 'Test',
  //   desc: 'Affiche les dernières vidéos d\'un producteur',
  //   title: config => 'test',
  //   config: config => ({...config}),
  // },
};

export default Widgets;
