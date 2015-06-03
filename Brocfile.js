/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/ember-backdoor/backdoor.js');
app.import('bower_components/moment/moment.js');

module.exports = app.toTree();