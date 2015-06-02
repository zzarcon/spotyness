import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['playlists', 'playlist'],
  currentTrack: null,
  currentVideo: null,
  videoPlayer: null,
  activePlaylist: Ember.computed.alias('controllers.playlist'),

  play: function(track) {
    var currentTrack = this.get('currentTrack');
    currentTrack && currentTrack.set('isActive', false);

    track.set('isActive', true);
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

  videoPercentage: Ember.computed('videoPlayer.currentTimeValue', 'videoPlayer.durationValue', {
    get: function() {
      if (!this.get('videoPlayer.currentTimeValue')) return 0;

      return parseInt((this.get('videoPlayer.currentTimeValue') * 100) / this.get('videoPlayer.durationValue'), 10);
    }
  }),

  actions: {
    login: function() {
      this.get('session').login();
    },

    onBuffer: function() {
      console.log('onBuffer');
    },

    onEnd: function() {
      this.get('activePlaylist').send('playNext');
    },

    seekTo: function() {
      var el = document.getElementById("video-slider");
      
      this.get('videoPlayer').send('seekTo', el.value);
    }
  }
});