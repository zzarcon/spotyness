/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    apiKey: 'AIzaSyC74lOQXYUVEZNkVkdh_XThJmV0pQbiwVw',
    GoogleScopes: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/youtube',
    clientId: '8678c3aa274246d0a4fd5f7d213dc866',
    spotyScopes: ['user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read', 'user-library-read'],
    redirectUri: '/callback.html',
    apiHost: 'https://api.spotify.com/v1',
    modulePrefix: 'spotyness',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    contentSecurityPolicy: {
      'img-src': "* 'self' 'unsafe-inline'",
      'connect-src': "*",
      'style-src': "* 'self' 'unsafe-inline'",
      'report-uri': "*",
      'script-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* 'self' 'unsafe-inline' 'unsafe-eval'",
      'default-src': "* 'self' 'unsafe-inline' 'unsafe-eval'"
    }
  };

  if (environment === 'development') {
    ENV.mp3trifyHost = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.mp3trifyHost = 'http://mp3trify.herokuapp.com';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-67282817-1'
    };
  }

  return ENV;
};
