import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(transition) {
    return this.get('store').find('track', {
      playlist_id: transition.params.playlist.playlist_id
    });
  },

  model: function(params) {
    return this.get('store').find('playlist', params.playlist_id);
  },

  setupController: function(controller, model) {
    var tracks = this.get('store').all('track').filterBy('playlistId', '2yE3vx0pBnyqXA594yXG0D');

    controller.set('content', model);
    controller.set('tracks', tracks);
  }
});