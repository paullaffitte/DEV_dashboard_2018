// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const Schema = mongooseClient.Schema;
  const users = new Schema({

    email: {type: String},
    password: {type: String},

    widgets: [{
      id: {type: String, required: true},
      name: {type: String},
      config: {type: Schema.Types.Mixed},
    }],

    // auth0Id: { type: String },

    googleId: {type: String},
    google: {type: Object},

    facebookId: {type: String},
    facebook: {type: Object},

    githubId: {type: String},
    github: {type: Object},

    twitterId: {type: String},
    twitter: {type: Object},

    trelloId: {type: String},
    trello: {type: Object},

    epitech: {type: Object}

  }, {
      timestamps: true
    });

  return mongooseClient.model('users', users);
};
