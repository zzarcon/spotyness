import Ember from "ember";

var Youtube = Ember.Object.extend({
  search: function(query, maxResults = 1) {
    return new Ember.RSVP.Promise(function(resolve) {
      var youtube = gapi.client.youtube;
      if (!youtube) return;
      
      var request = youtube.search.list({
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: maxResults,
        order: 'viewCount' //rating, relevance
      });

      request.execute(resolve);
    });
  }
});

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
  after: ['session'],
  initialize: initialize
};
