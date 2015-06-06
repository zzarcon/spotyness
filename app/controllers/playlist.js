import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  tracks: [],
  sortProperty: "addedAt",
  sortAscending: false,

  sortedTracks: Ember.computed.sort('tracks', 'tracksSorting'),
  app: Ember.computed.alias('controllers.application'),
  isFirstTrackActive: Ember.computed.equal('currentTrackIndex', 0),

  tracksSorting: Ember.computed('sortProperty', 'sortAscending', {
    get() {
      var property = this.get('sortProperty');
      var direction = this.get('sortAscending') ? 'asc' : 'desc';

      return [`${property}:${direction}`];
    }
  }),

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
    play: function(track) {
      this.get('app').play(track);
    },

    navigate: function(direction) {
      var current = this.get('controllers.application.currentTrack');
      var index = this.get('tracks').indexOf(current);
      var next = this.get('tracks').objectAt(index + (direction === "next" ? 1 : -1));

      next && this.get('controllers.application').play(next);
    },

    changeSort: function(property) {
      var currentSortProperty = this.get('sortProperty');

      if (currentSortProperty === property) {
        this.toggleProperty('sortAscending');
      }

      this.set('sortProperty', property);
    }
  }
});