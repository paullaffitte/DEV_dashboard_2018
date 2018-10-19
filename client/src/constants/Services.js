import Globals from './Globals';

const Services = {
  openWeatherMap: {
    icon: 'https://www.gotenzo.com/wp-content/uploads/2018/05/icon-openweathermap-1.png',
    name: 'Open Weather Map',
    apiKey: 'b709427a0be399477550d7f32a4dcbae',
  },
  github: {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png',
    name: 'Github',
    isValid: user => user.github && user.github.accessToken,
    subscribeUrl: Globals.API_URL + '/auth/github',
  },
  dataatwork: {
    icon: 'http://dataatwork.org/favicon.ico',
    name: 'Data at work',
  },
  minecraft: {
    icon: 'https://minecraft.net/android-icon-192x192.png',
    name: 'Minecraft',
  },
  loripsum: {
    icon: 'https://loripsum.net/favicon/favicon.ico',
    name: 'loripsum',
  },
  lastfm: {
    icon: 'https://cdn.last.fm/flatness/favicon.2.ico',
    name: 'LastFM',
    apiKey: '0a31018bd7823695d298fbf503de993e',
  },
};

export default Services;
