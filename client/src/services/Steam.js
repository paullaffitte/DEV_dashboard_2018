import Services from '../constants/Services';
import Axios from 'axios';

export default async function(method, steamId, opts=[]) {
  let optsStr = Object.keys(opts).map(k => `${k}=${opts[k]}`).join('&');
  optsStr = optsStr.length ? optsStr + '&' : '';
  return Axios.get(`https://api.steampowered.com/${method}/v0001/?key=${Services.steam.apiKey}&steamid=${steamId}&${optsStr}&format=json`);
};
