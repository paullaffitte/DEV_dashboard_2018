let config = {
  "host": "localhost",
  "port": 3030,
  "public": "../public/",
  "paginate": {
    "default": 10,
    "max": 50
  },
  "authentication": {
    "secret": "979211fddca78f9c8919cfd4c949faf9cf8105595054bdca847a0ffe074495a56c8dddc0217a2ede84eb4b30c14625724e8de73fd766412df4ca6b931c8c116a50b67b0b1276dac1bc21da43f96c914b7448c10cf0baf53628a822970426e3f833e054675b0125b1460712f9a5e4eb12e24672c2ce93ea1226dc2dc0a3566b3fd699c86e6a3bf518e5998821db746de9e96535bdcee65e136d23ee1e26abf8753bf9022e5925ef4965adc369cde6bc4655da0cbf23d3ca8d0ab4d028212508feaa35c3023cceb5016ab5fcc0e01bfdd5f0e3de153a3733187d319646bfbc0b32bcb053bab400931d5bde7180d2b2d02f410e12f0d15673cd22d1c07c39252fc6",
    "strategies": [
      "jwt",
      "local"
    ],
    "path": "/authentication",
    "service": "users",
    "jwt": {
      "header": {
        "typ": "access"
      },
      "audience": "https://yourdomain.com",
      "subject": "anonymous",
      "issuer": "feathers",
      "algorithm": "HS256",
      "expiresIn": "1d"
    },
    "local": {
      "entity": "user",
      "usernameField": "email",
      "passwordField": "password"
    },
    "auth0": {
      "clientID": "your auth0 client id",
      "clientSecret": "your auth0 client secret",
      "successRedirect": "/",
      "domain": "mydomain.auth0.com"
    },
    "google": {
      "clientID": "your google client id",
      "clientSecret": "your google client secret",
      "successRedirect": "/",
      "scope": [
        "profile openid email"
      ]
    },
    "facebook": {
      "clientID": "your facebook client id",
      "clientSecret": "your facebook client secret",
      "successRedirect": "/",
      "scope": [
        "public_profile",
        "email"
      ],
      "profileFields": [
        "id",
        "displayName",
        "first_name",
        "last_name",
        "email",
        "gender",
        "profileUrl",
        "birthday",
        "picture",
        "permissions"
      ]
    },
    "github": {
      "clientID": "bcbc2948f4d726eb367d",
      "clientSecret": "fdcfdc5e0491b5e6bf48c1ee2b60fe15d313335c",
      "successRedirect": "http://localhost:3000/",
      "scope": "user public_repo repo gist"
    },
    "cookie": {
      "enabled": true,
      "name": "feathers-jwt",
      "httpOnly": false,
      "secure": false
    }
  },
  "mongodb": `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/dashboard?authSource=admin`
}

module.exports = config;
