/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    apiKey: 'AIzaSyC74lOQXYUVEZNkVkdh_XThJmV0pQbiwVw',
    scopes: 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/youtube',
    clientId: '8678c3aa274246d0a4fd5f7d213dc866',
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

  }

  return ENV;
};
