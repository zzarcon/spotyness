import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('playlist', {path: "playlist/:playlist_id"});
  this.route('user');
  this.route('artist', {path: "artist/:artist_id"});
  this.route('login');
  this.route('explore');
});

export default Router;
