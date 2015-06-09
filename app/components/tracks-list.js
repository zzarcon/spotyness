import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tracks-list-component'],
  tagName: "table",
  action: "play",

  fromPlaylist: true, //If the user has the track in some playlist
  sortProperty: "addedAt",
  sortAscending: false,

  sortedContent: Ember.computed.sort('content', 'tracksSorting'),

  tracksSorting: Ember.computed('sortProperty', 'sortAscending', {
    get() {
      var property = this.get('sortProperty');
      var direction = this.get('sortAscending') ? 'asc' : 'desc';

      return [`${property}:${direction}`];
    }
  }),

  actions: {
    changeSort(property) {
      var currentSortProperty = this.get('sortProperty');

      if (currentSortProperty === property) {
        this.toggleProperty('sortAscending');
      }

      this.set('sortProperty', property);
    },

    play(track) {
      this.sendAction('action', track);
    }
  }
});