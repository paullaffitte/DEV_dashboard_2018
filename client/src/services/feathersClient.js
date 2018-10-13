import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';
import { CookieStorage } from 'cookie-storage';
import Globals from '../constants/Globals';


const socket = io(Globals.API_URL, {
	transports: ['websocket'],
	forceNew: true,
});

const feathersClient = feathers();

feathersClient.configure(auth({
	storage: new CookieStorage(),
}));

feathersClient.configure(socketio(socket));

export default feathersClient;
