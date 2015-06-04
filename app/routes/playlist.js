import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return `Playlist: ${model.get('name')}`;
  },

  title: function(tokens) {
    return tokens.join('');
  },

  beforeModel: function(transition) {
    return this.get('store').find('track', {
      playlist_id: transition.params.playlist.playlist_id
    });
  },

  model: function(params) {
    return this.get('store').find('playlist', params.playlist_id);
  },

  setupController: function(controller, model, transition) {
    var playlistId = transition.params.playlist.playlist_id;
    var tracks = this.get('store').all('track').filterBy('playlistId', playlistId);

    controller.set('content', model);
    controller.set('tracks', tracks);
  }
});