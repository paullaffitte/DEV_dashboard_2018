import Services from '../constants/Services';
import Axios from 'axios';

export default async function(method, opts) {
  let optsStr = Object.keys(opts).map(k => `${k}=${opts[k]}`).join('&');
  optsStr = optsStr.length ? optsStr + '&' : '';
  return Axios.get(`https://ws.audioscrobbler.com/2.0/?method=${method}&${optsStr}api_key=${Services.lastfm.apiKey}&format=json`);
};
