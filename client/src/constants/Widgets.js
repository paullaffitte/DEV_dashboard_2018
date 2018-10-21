import WeatherCity, {WeatherCityForm} from '../components/widgets/WeatherCity';
import GithubCommits, {GithubCommitsForm} from '../components/widgets/GithubCommits';
import GithubIssues, {GithubIssuesForm} from '../components/widgets/GithubIssues';
import GithubPullRequests, {GithubPullRequestsForm} from '../components/widgets/GithubPullRequests';
import TwitterAccount, {TwitterAccountForm} from '../components/widgets/TwitterAccount';
import DataAtWorkJobs, {DataAtWorkJobsForm} from '../components/widgets/DataAtWorkJobs';
import DataAtWorkSkills, {DataAtWorkSkillsForm} from '../components/widgets/DataAtWorkSkills';
import MinecraftForm from '../components/widgets/MinecraftForm';
import MinecraftBanner from '../components/widgets/MinecraftBanner';
import MinecraftStatus from '../components/widgets/MinecraftStatus';
import Loripsum, {LoripsumForm} from '../components/widgets/Loripsum';
import LastFMArtistTopTracks, {LastFMArtistTopTracksForm} from '../components/widgets/LastFMArtistTopTracks';
import LastFMArtistTopAlbums, {LastFMArtistTopAlbumsForm} from '../components/widgets/LastFMArtistTopAlbums';
import LastFMArtistTopTags, {LastFMArtistTopTagsForm} from '../components/widgets/LastFMArtistTopTags';
import LastFMArtistForm from '../components/widgets/LastFMArtistForm';
import TrelloColumn, {TrelloColumnForm} from '../components/widgets/TrelloColumn';
import TrelloAssigned, {TrelloAssignedForm} from '../components/widgets/TrelloAssigned';
import TrelloMine, {TrelloMineForm} from '../components/widgets/TrelloMine';
import TrelloLists, {TrelloListsForm} from '../components/widgets/TrelloLists';
import TrelloBoard, {TrelloBoardForm} from '../components/widgets/TrelloBoard';
import EpitechMessages, {EpitechMessagesForm} from '../components/widgets/EpitechMessages';
import EpitechModule, {EpitechModuleForm} from '../components/widgets/EpitechModule';
import YammerPosts, {YammerPostsForm} from '../components/widgets/YammerPosts';
import YammerMessages, {YammerMessagesForm} from '../components/widgets/YammerMessages';
import YammerThread, {YammerThreadForm} from '../components/widgets/YammerThread';
import SteamRecentGames from '../components/widgets/SteamRecentGames';
import SteamForm from '../components/widgets/SteamForm';

const Widgets = {
  // Display weather for a given city
  weather_city: {
    service: 'openWeatherMap',
    component: WeatherCity,
    form: WeatherCityForm,
    name: 'Weather City',
    desc: 'Affiche la météo d\'une ville donnée',
    title: config => (`Météo ${config.city}`),
    w: 1,
    h: 1,
  },
  github_commits: {
    service: 'github',
    component: GithubCommits,
    form: GithubCommitsForm,
    name: 'Commits',
    desc: 'Affiche les commits d\'un repository',
    title: config => `${config.repository} - Commits`,
    w: 1,
    h: 1,
  },
  github_issues: {
    service: 'github',
    component: GithubIssues,
    form: GithubIssuesForm,
    name: 'Issues',
    desc: 'Affiche les issues d\'un repository',
    title: config => `${config.repository} - Issues`,
    w: 1,
    h: 1,
  },
  github_pr: {
    service: 'github',
    component: GithubPullRequests,
    form: GithubPullRequestsForm,
    name: 'Pull Requests',
    desc: 'Affiche les pull requests d\'un repository',
    title: config => `${config.repository} - Pull Requests`,
    w: 1,
    h: 1,
  },
  twitter_tweets: {
    service: 'twitter',
    component: TwitterAccount,
    form: TwitterAccountForm,
    name: 'Compte',
    desc: 'Affiche les tweets d\'un compte',
    title: config => `${config.screenView} - Twitter`,
    w: 1,
    h: 1,
  },
  dataatwork_jobs: {
    service: 'dataatwork',
    component: DataAtWorkJobs,
    form: DataAtWorkJobsForm,
    name: 'Emplois',
    desc: 'Affiche des emplois relatif à une compétence',
    title: 'DataAtWork - Emplois',
    w: 1,
    h: 1,
  },
  dataatwork_skills: {
    service: 'dataatwork',
    component: DataAtWorkSkills,
    form: DataAtWorkSkillsForm,
    name: 'Compétences',
    desc: 'Affiche des compétence relatif à une emplois',
    title: 'DataAtWork - Compétences',
    w: 1,
    h: 1,
  },
  minecraft_banner: {
    service: 'minecraft',
    component: MinecraftBanner,
    form: MinecraftForm,
    name: 'Bannière',
    desc: 'Affiche la bannière d\'un serveur',
    title: config => `${config.serverUrl} - Bannière`,
    w: 1,
    h: 1,
  },
  minecraft_status: {
    service: 'minecraft',
    component: MinecraftStatus,
    form: MinecraftForm,
    name: 'Status',
    desc: 'Affiche le status d\'un serveur',
    title: config => `${config.serverUrl} - Status`,
    w: 1,
    h: 1,
  },
  loripsum: {
    service: 'loripsum',
    component: Loripsum,
    form: LoripsumForm,
    name: 'Generator',
    desc: 'Génère des lorem ipsum',
    title: config => `Lorem ipsum`,
    w: 1,
    h: 1,
  },
  lastfm_artistTopTracks: {
    service: 'lastfm',
    component: LastFMArtistTopTracks,
    form: LastFMArtistForm,
    name: 'Top tracks',
    desc: 'Top tracks d\'un artiste',
    title: config => `${config.artist} - Top tracks`,
    w: 1,
    h: 1,
  },
  lastfm_artistTopAlbums: {
    service: 'lastfm',
    component: LastFMArtistTopAlbums,
    form: LastFMArtistForm,
    name: 'Top albums',
    desc: 'Top albums d\'un artiste',
    title: config => `${config.artist} - Top albums`,
    w: 1,
    h: 1,
  },
  lastfm_artistTopTags: {
    service: 'lastfm',
    component: LastFMArtistTopTags,
    form: LastFMArtistForm,
    name: 'Top tags',
    desc: 'Top tags d\'un artiste',
    title: config => `${config.artist} - Top tags`,
    w: 1,
    h: 1,
  },
  trello_column: {
    service: 'trello',
    component: TrelloColumn,
    form: TrelloColumnForm,
    name: 'Liste',
    desc: 'Affiche une liste de cartes',
    title: 'Liste Trello',
    w: 1,
    h: 1,
  },
  trello_assigned: {
    service: 'trello',
    component: TrelloAssigned,
    form: TrelloAssignedForm,
    name: 'Assignées',
    desc: 'Affiche les cartes assignées a un utilisateur',
    title: 'Liste Trello',
    w: 1,
    h: 1,
  },
  trello_mine: {
    service: 'trello',
    component: TrelloMine,
    form: TrelloMineForm,
    name: 'Mes cartes',
    desc: 'Affiche les cartes assignées a moi-même',
    title: 'Mes cartes - Trello',
    w: 1,
    h: 1,
  },
  trello_lists: {
    service: 'trello',
    component: TrelloLists,
    form: TrelloListsForm,
    name: 'Listes',
    desc: 'Affiche les listes d\'un tableau',
    title: 'Listes - Trello',
    w: 1,
    h: 1,
  },
  trello_board: {
    service: 'trello',
    component: TrelloBoard,
    form: TrelloBoardForm,
    name: 'Tableau',
    desc: 'Affiche les cartes d\'un tableau',
    title: 'Tableau - Trello',
    w: 1,
    h: 1,
  },
  trello_board: {
    service: 'trello',
    component: TrelloBoard,
    form: TrelloBoardForm,
    name: 'Tableau',
    desc: 'Affiche les cartes d\'un tableau',
    title: 'Tableau - Trello',
    w: 1,
    h: 1,
  },
  epitech_messages: {
    service: 'epitech',
    component: EpitechMessages,
    form: EpitechMessagesForm,
    name: 'Notifications',
    desc: 'Affiche les notifications de l\'intra',
    title: 'Notifications - Epitech Intra',
    w: 1,
    h: 1,
  },
  epitech_module: {
    service: 'epitech',
    component: EpitechModule,
    form: EpitechModuleForm,
    name: 'Module',
    desc: 'Affiche les activités d\'un module',
    title: 'Module - Epitech Intra',
    w: 1,
    h: 1,
  },
  yammer_posts: {
    service: 'yammer',
    component: YammerPosts,
    form: YammerPostsForm,
    name: 'Groupe',
    desc: 'Affiche les posts d\'un groupe',
    title: 'Groupe - Yammer',
  },
  yammer_thread: {
    service: 'yammer',
    component: YammerThread,
    form: YammerThreadForm,
    name: 'Thread',
    desc: 'Affiche les posts d\'un thread',
    title: 'Thread - Yammer',
  },
  yammer_messages: {
    service: 'yammer',
    component: YammerMessages,
    form: YammerMessagesForm,
    name: 'Messages',
    desc: 'Affiche mes messages reçus',
    title: 'Messages - Yammer',
  },
  steam_recentGames: {
    service: 'steam',
    component: SteamRecentGames,
    form: SteamForm,
    name: 'Jeux récemment joués',
    desc: 'Affiche les jeux auquels un utilisateur a récemment joué',
    title: config => 'Jeux récemments joués',
  },
};

export default Widgets;
