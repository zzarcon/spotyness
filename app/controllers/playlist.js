import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  tracks: [],

  actions: {
    play: function(track) {
      this.get('controllers.application').play(track);
    },

    navigate: function(direction) {
      var current = this.get('controllers.application.currentTrack');
      var index = this.get('tracks').indexOf(current);
      var next = this.get('tracks').objectAt(index + (direction === "next" ? 1 : -1));

      this.get('controllers.application').play(next);
    }
  }
});