/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults);

  app.import('bower_components/ember-backdoor/backdoor.js');
  app.import('bower_components/moment/moment.js');

  return app.toTree();
};
