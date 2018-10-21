/* eslint-disable no-console */
const fs = require('fs');
const http = require('http');
const https = require('https');
// const logger = require('winston');
const app = require('./app');
const about = require('../config/about');

const server = https.createServer({
  key: fs.readFileSync('./tls/server.key'),
  cert: fs.readFileSync('./tls/server.csr')
}, app).listen(3030);

// Call app.setup to initialize all services and SocketIO
app.setup(server);

http.createServer((req, res) => {
  const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddres || '').split(':');
  about.client.host = ip[ip.length - 1];
  about.server.current_time = (Date.now() / 1000).toFixed(0);
  res.writeHead(200);
  res.end(JSON.stringify(about));
}).listen(8080);
