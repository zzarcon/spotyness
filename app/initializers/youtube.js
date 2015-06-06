import Ember from "ember";

var apiKey = 'AIzaSyC74lOQXYUVEZNkVkdh_XThJmV0pQbiwVw';
var scopes = 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/youtube';

var Youtube = Ember.Object.extend({
  search: function(query, maxResults = 1) {
    var request = gapi.client.youtube.search.list({
      q: query,
      part: 'snippet',
      type: 'video',
      maxResults: maxResults,
      order: 'viewCount' //rating, relevance
    });

    return new Ember.RSVP.Promise(function(resolve) {
      request.execute(resolve);
    });
  }
});

function onGoogleApiLoad() {
  console.log('onGoogleApiLoad');
  gapi.load('auth2', function() {
    console.log('auth2 loaded');
    gapi.client.load('youtube', 'v3').then(function() {
      console.log('youtube client loaded');
      gapi.auth2.init({fetch_basic_profile: false, scope: scopes});
    });
  });
}
console.log('import onGoogleApiLoad');
//Import global function for Google JS Sdk
window.onGoogleApiLoad = onGoogleApiLoad;

export function initialize(container, app) {
  app.register('youtube:main', Youtube, {singleton: true});

  app.inject('controller', 'youtube', 'youtube:main');
  app.inject('route', 'youtube', 'youtube:main');
  app.inject('router', 'youtube', 'youtube:main');
  app.inject('view', 'youtube', 'youtube:main');
  app.inject('model', 'youtube', 'youtube:main');
}

export default {
  name: 'youtube',
  initialize: initialize
};
