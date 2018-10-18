import WeatherCity, {WeatherCityForm} from '../components/widgets/WeatherCity';
import GithubCommits, {GithubCommitsForm} from '../components/widgets/GithubCommits';
import GithubIssues, {GithubIssuesForm} from '../components/widgets/GithubIssues';
import GithubPullRequests, {GithubPullRequestsForm} from '../components/widgets/GithubPullRequests';
import DataAtWorkJobs, {DataAtWorkJobsForm} from '../components/widgets/DataAtWorkJobs';
import DataAtWorkSkills, {DataAtWorkSkillsForm} from '../components/widgets/DataAtWorkSkills';
import MinecraftBanner, {MinecraftBannerForm} from '../components/widgets/MinecraftBanner';

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
  dataatwork_jobs: {
    service: 'dataatwork',
    component: DataAtWorkJobs,
    form: DataAtWorkJobsForm,
    name: 'Emplois',
    desc: 'Affiche des emplois relatif à une compétence',
    title: 'DataAtWork - Emplois',
  },
  dataatwork_skills: {
    service: 'dataatwork',
    component: DataAtWorkSkills,
    form: DataAtWorkSkillsForm,
    name: 'Compétences',
    desc: 'Affiche des compétence relatif à une emplois',
    title: 'DataAtWork - Compétences',
  },
  minecraft_banner: {
    service: 'minecraft',
    component: MinecraftBanner,
    form: MinecraftBannerForm,
    name: 'Bannière',
    desc: 'Affiche la bannière d\'un serveur',
    title: config => `${config.serverUrl} - Bannière`,
  }
};

export default Widgets;
