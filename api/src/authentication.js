const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const oauth2 = require('@feathersjs/authentication-oauth2');
const Auth0Strategy = require('passport-auth0');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const GithubStrategy = require('passport-github');
const TwitterStrategy = require('passport-twitter');
const YammerStrategy = require('passport-yammer').Strategy;
const TrelloStrategy = require('passport-trello').Strategy;

const AuthVerifier = require('./verifiers/AuthVerifier');


module.exports = function(app) {
  const config = app.get('authentication');

  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());

  app.configure(oauth2(Object.assign({
    name: 'auth0',
    Strategy: Auth0Strategy
  }, config.auth0)));

  app.configure(oauth2(Object.assign({
    name: 'google',
    Strategy: GoogleStrategy
  }, config.google)));

  app.configure(oauth2(Object.assign({
    name: 'facebook',
    Strategy: FacebookStrategy,
    Verifier: AuthVerifier,
  }, config.facebook)));

  app.configure(oauth2(Object.assign({
    name: 'github',
    Strategy: GithubStrategy,
    Verifier: AuthVerifier,
  }, config.github)));

  app.configure(oauth2(Object.assign({
    name: 'twitter',
    Strategy: TwitterStrategy,
    Verifier: AuthVerifier,
  }, config.twitter)));

  app.configure(oauth2(Object.assign({
    name: 'trello',
    Strategy: TrelloStrategy,
    Verifier: AuthVerifier,
  }, config.trello)));

  app.configure(oauth2(Object.assign({
    name: 'yammer',
    Strategy: YammerStrategy,
    Verifier: AuthVerifier,
  }, config.yammer)));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
