import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  tracks: [],

  playNext: function() {

  },

  actions: {
    play: function(track) {
      this.get('controllers.application').play(track);
    },

    playPrev: function() {
      debugger;
    },

    playNext: function() {
      var current = this.get('controllers.application.currentTrack');
      var index = this.get('tracks').indexOf(current);
      var next = this.get('tracks').objectAt(index + 1);

      this.get('controllers.application').play(next);
    }
  }
});