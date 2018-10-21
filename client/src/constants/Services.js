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
    subscribe: Globals.API_URL + '/auth/github',
  },
  epitech: {
    icon: 'https://lh4.ggpht.com/sznQf6u_RQ5iGG8k2HpC7Y_kzWCSZctlLKHGsGKi66lhMICuRTQU-GfXB5IxTpbnth4=w300',
    name: 'Epitech Intra',
    isValid: user => user.epitech && user.epitech.autoLogin,
    subscribe: ['autoLogin'],
  },
  twitter: {
    icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/300px-Twitter_bird_logo_2012.svg.png',
    name: 'Twitter',
    isValid: user => user.twitter && user.twitter.accessToken,
    subscribe: Globals.API_URL + '/auth/twitter',
    consumerKey: "MbKILJQzXv7qnH3M6Ekmyo7Ni",
    consumerSecret: "KCo6yvAHXidTKJtnyXE5GDtBmZkttJGilK4rL6LMExyJYPoprX",
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
  trello: {
    icon: 'https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-05-18/44042585718_0e6a837d5b63fd1cfc07_512.png',
    name: 'Trello',
    isValid: user => user.trello && user.trello.accessToken,
    subscribe: Globals.API_URL + '/auth/trello',
    apiKey: '1e322c860ee55e5246e6b3f000b281d2',
  },
};

export default Services;
