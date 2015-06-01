import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playlist', {path: "playlist/:playlist_id"});
  this.route('user');
});

export default Router;
