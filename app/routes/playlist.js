import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return `Playlist: ${model.get('name')}`;
  },

  title: function(tokens) {
    return tokens.join('');
  },

  beforeModel: function(transition) {
    let user = transition.queryParams.user;

    return this.get('store').find('track', {
      playlist_id: transition.params.playlist.playlist_id,
      user_id: user
    });
  },

  model: function(params, transition) {
    // debugger;
    console.log('model playlist', params.playlist_id);
    // return this.get('store').find('playlist', params.playlist_id);

    let user = transition.queryParams.user;

    return this.get('store').find('playlist', {
      playlist_id: params.playlist_id,
      user_id: user
    });
  },

  setupController: function(controller, model, transition) {
    var playlistId = transition.params.playlist.playlist_id;
    var tracks = this.get('store').all('track').filterBy('playlistId', playlistId);
    var sortedTracks = tracks.sortBy('addedAt').reverse();

    controller.set('content', model);
    controller.set('tracks', sortedTracks);

    //Autoplay first track when enter in a playlist
    this.send('play', sortedTracks.get('firstObject'));
  }
});