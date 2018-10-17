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
  // stackoverflow: {
  //   icon: 'https://ih1.redbubble.net/image.316142692.7951/ap,550x550,12x12,1,transparent,t.png',
  //   name: 'Stackoverflow',
  //   isValid: user => user.stackoverflow && user.stackoverflow.accessToken,
  //   subscribeUrl: Globals.API_URL + '/auth/stackoverflow',
  // },
  // steam: {
  //   icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
  //   name: 'Steam',
  //   isValid: user => user.steam && user.steam.accessToken,
  //   subscribeUrl: Globals.API_URL + '/auth/steam',
  // }
};

export default Services;
