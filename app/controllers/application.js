import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['playlists', 'playlist'],
  currentTrack: null,
  currentVideo: null,
  videoPlayer: null,
  activePlaylist: Ember.computed.alias('controllers.playlist'),
  myPlaylists: Ember.computed.alias('controllers.playlists.mine'),

  play: function(track) {
    var query = track.getWithDefault('artists.firstObject.name', '') + ' ' + track.get('name');
    var currentTrack = this.get('currentTrack');

    currentTrack && currentTrack.set('isActive', false);
    track.set('isActive', true);
    this.set('currentTrack', track);

    this.get('youtube').search(query).then(function(response) {
      var firstItem = response.items ? response.items[0] : null;
      //TODO: If no firstItem show error message and go to the next one
      if (!firstItem) return;

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

  //Watch "videoPlayer.playerState" because "getVolume" isn't always available
  initialVolume: Ember.computed('videoPlayer.playerState', {
    get() {
      var player = this.get('videoPlayer.player');
      if (!player || !player.getVolume) return 0;

      return player.getVolume();
    }
  }),

  actions: {
    login: function() {
      this.get('session').login();
    },

    onEnd: function() {
      this.get('activePlaylist').send('navigate', 'next');
    },

    seekTo: function() {
      var el = document.getElementById("video-slider");
      this.get('videoPlayer').send('seekTo', el.value);
    },

    changeVolume: function() {
      var el = document.getElementById("video-volume");
      this.get('videoPlayer.player').setVolume(el.value);
    }
  }
});