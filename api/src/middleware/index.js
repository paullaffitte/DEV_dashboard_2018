const session = require('express-session');

// eslint-disable-next-line no-unused-vars
module.exports = function(app) {
  // Add your custom middleware here. Remember that
  // in Express, the order matters.
  app.use(session({
    secret: 'mySuperSecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true
    }
  }));
};
