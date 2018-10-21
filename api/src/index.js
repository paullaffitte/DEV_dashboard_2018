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

http.createServer((_, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(about));
}).listen(8080);
