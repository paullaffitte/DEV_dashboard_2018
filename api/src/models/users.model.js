// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const Schema = mongooseClient.Schema;
  const users = new Schema({

    email: {type: String, unique: true},
    password: { type: String },

    widgets: [{
      id: { type: String, unique: true, required: true },
      name: { type: String },
      config: { type: Schema.Types.Mixed },
    }],

    auth0Id: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    githubId: { type: String },

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
