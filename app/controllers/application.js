import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['playlists'],
  currentTrack: null,
  currentVideo: null,

  play: function(track) {
    this.set('currentTrack', track);
    this.get('youtube').search(track.get('name')).then(function(response) {
      var firstItem = response.items[0];
      var video = {
        id: firstItem.id.videoId,
        description: firstItem.snippet.description,
        title: firstItem.snippet.title
      };

      this.set('currentVideo', video);
    }.bind(this));
  },

  actions: {
    login: function() {
      this.get('session').login(function() {
        console.log('login!');
      });
    }
  }
});