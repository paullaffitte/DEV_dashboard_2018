const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const winston = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const mongoose = require('./mongoose');
const proxy = require('http-proxy-middleware');

const app = express(feathers());

process.on('uncaughtException', err => {console.error(err.stack)});

// const logger = new (winston.Logger)({
//     transports: [
//         new winston.transports.File({
//             filename: 'access.log',
//             level: 'info'})
//     ]
// });
//
// logger.info('test');

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));

app.use('/loripsum', proxy({target: 'https://loripsum.net/api', changeOrigin: true}));
app.use('/twitter', proxy({
  target: 'https://api.twitter.com/1.1',
  changeOrigin: true,
  pathRewrite: {
    '^/twitter': '/'
  },
}));
app.use('/epitech', proxy({
  target: 'https://intra.epitech.eu',
  changeOrigin: true,
  pathRewrite: {
    '^/epitech': '/'
  },
}));
app.use('/yammer', proxy({
  target: 'https://www.yammer.com/api/v1',
  changeOrigin: true,
  pathRewrite: {
    '^/yammer': '/'
  },
}));

// Host the public folder
app.use('/', express.static(app.get('public')));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(mongoose);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
// app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
