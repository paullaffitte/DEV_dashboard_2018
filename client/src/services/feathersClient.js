import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030', {
	transports: ['websocket'],
	forceNew: true,
});

const feathersClient = feathers();

feathersClient.configure(auth({
	storage: window.localStorage,
	cookie: 'feathers-jwt',
}));

feathersClient.configure(socketio(socket));

export default feathersClient;
