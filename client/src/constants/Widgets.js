import WeatherCity, {WeatherCityForm} from '../components/widgets/WeatherCity';
import GithubCommits, {GithubCommitsForm} from '../components/widgets/GithubCommits';
import GithubIssues, {GithubIssuesForm} from '../components/widgets/GithubIssues';
import GithubPullRequests, {GithubPullRequestsForm} from '../components/widgets/GithubPullRequests';
import DataAtWorkJobs, {DataAtWorkJobsForm} from '../components/widgets/DataAtWorkJobs';
import DataAtWorkSkills, {DataAtWorkSkillsForm} from '../components/widgets/DataAtWorkSkills';
import MinecraftForm from '../components/widgets/MinecraftForm';
import MinecraftBanner from '../components/widgets/MinecraftBanner';
import MinecraftStatus from '../components/widgets/MinecraftStatus';
import Loripsum, {LoripsumForm} from '../components/widgets/Loripsum';
import LastFMArtistTopTracks, {LastFMArtistTopTracksForm} from '../components/widgets/LastFMArtistTopTracks';
import LastFMArtistTopAlbums, {LastFMArtistTopAlbumsForm} from '../components/widgets/LastFMArtistTopAlbums';
import LastFMArtistForm from '../components/widgets/LastFMArtistForm';

const Widgets = {
  // Display weather for a given city
  weather_city: {
    service: 'openWeatherMap',
    component: WeatherCity,
    form: WeatherCityForm,
    name: 'Weather City',
    desc: 'Affiche la météo d\'une ville donnée',
    title: config => (`Météo capitalize(${config.city})`),
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
    form: MinecraftForm,
    name: 'Bannière',
    desc: 'Affiche la bannière d\'un serveur',
    title: config => `${config.serverUrl} - Bannière`,
  },
  minecraft_status: {
    service: 'minecraft',
    component: MinecraftStatus,
    form: MinecraftForm,
    name: 'Status',
    desc: 'Affiche le status d\'un serveur',
    title: config => `${config.serverUrl} - Status`,
  },
  loripsum: {
    service: 'loripsum',
    component: Loripsum,
    form: LoripsumForm,
    name: 'Generator',
    desc: 'Génère des lorem ipsum',
    title: config => `Lorem ipsum`,
  },
  lastfm_artistTopTracks: {
    service: 'lastfm',
    component: LastFMArtistTopTracks,
    form: LastFMArtistForm,
    name: 'Top tracks',
    desc: 'Top tracks d\'un artiste',
    title: config => `${config.artist} - Top tracks`,
  },
  lastfm_artistTopAlbums: {
    service: 'lastfm',
    component: LastFMArtistTopAlbums,
    form: LastFMArtistForm,
    name: 'Top albums',
    desc: 'Top albums d\'un artiste',
    title: config => `${config.artist} - Top albums`,
  },
};

export default Widgets;
