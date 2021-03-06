import Ember from 'ember';
import DS from "ember-data";
import Resolver from 'ember-resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;
Ember.LOG_VERSIONS = false;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

//TODO: Remove this
DS.RESTAdapter.reopen({
  host: config.apiHost
});

loadInitializers(App, config.modulePrefix);

export default App;
