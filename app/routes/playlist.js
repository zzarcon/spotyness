import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return `Playlist: ${model.get('name')}`;
  },

  title: function(tokens) {
    return tokens.join('');
  },

  beforeModel: function(transition) {
    let playlist = transition.params.playlist;

    return this.store.find('track', {
      playlist_id: playlist.playlist_id,
      user_id: playlist.user_id
    });
  },

  model: function(params, transition) {
    return this.store.find('playlist', {
      playlist_id: params.playlist_id,
      user_id: params.user_id
    });
  },

  setupController: function(controller, model, transition) {
    var playlistId = transition.params.playlist.playlist_id;
    var tracks = this.store.peekAll('track').filterBy('playlistId', playlistId);
    var sortedTracks = tracks.sortBy('addedAt').reverse();
    var playlist = this.store.getById('playlist', playlistId);

    controller.set('content', playlist);
    controller.set('tracks', sortedTracks);

    //Autoplay first track when enter in a playlist
    this.send('play', sortedTracks.get('firstObject'));
  }
});