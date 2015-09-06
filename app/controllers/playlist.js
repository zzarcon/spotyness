import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  tracks: [],
  app: Ember.computed.alias('controllers.application'),
  isFirstTrackActive: Ember.computed.equal('currentTrackIndex', 0),

  isLastTrackActive: Ember.computed('currentTrackIndex', {
    get() {
      return this.get('app.currentTrack') === this.get('tracks.lastObject');
    }
  }),

  currentTrackIndex: Ember.computed('app.currentTrack', {
    get() {
      return this.get('tracks').indexOf(this.get('app.currentTrack'));
    }
  }),

  actions: {
    navigate: function(direction) {
      var current = this.get('controllers.application.currentTrack');
      var index = this.get('tracks').indexOf(current);
      var next = this.get('tracks').objectAt(index + (direction === "next" ? 1 : -1));
      
      //TODO: Fix next song
      next && this.get('controllers.application').play(next);
    }
  }
});