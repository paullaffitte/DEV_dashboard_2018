const Debug = require('debug');
const Verifier = require('./Verifier.js');

const debug = Debug('feathers-authentication-emailfirstoauth2:verify');

const authentication = require('@feathersjs/authentication');
const cookieParser = require('cookie-parser')();
const authenticateHook = authentication.hooks.authenticate('jwt');

class AuthVerifier extends Verifier {

  constructor (app, options = {}) {
    options.emailField = options.emailField || 'email';
    super(app, options);
  }

  verify (req, accessToken, refreshToken, profile, done) {
    cookieParser(req, null, () => {});
    if(req.cookies['feathers-jwt']){
        const context = {
            type: 'before',
            app: req.app,
            data: {},
            params: {
              cookies: req.cookies,
              headers: req.headers,
              provider: 'rest',
            }
        };

        return authenticateHook(context).then(r => {
            if(r.params.authenticated) {
               req.user = r.params.user;
            }

            return super.verify(req, accessToken, refreshToken, profile, done);
        }).catch(e => {
            return super.verify(req, accessToken, refreshToken, profile, done);
        });
    }
    return super.verify(req, accessToken, refreshToken, profile, done);
  }
}

module.exports = AuthVerifier;
