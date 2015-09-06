import Ember from "ember";
import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  addedAt: attr('date'),
  addedBy: attr(),
  isLocal: attr(),
  playlistId: attr('string'),
  name: attr('string'),
  album: attr(),
  artists: attr(),
  popularity: attr('number'),
  //Fix serializer
  duration_ms: attr('number'),

  artistName: Ember.computed.alias('mainArtist.name'),
  mainArtist: Ember.computed.alias('artists.firstObject'),
  isActive: false,

  addedAgo: Ember.computed('addedAt', {
    get() {
      return moment(this.get('addedAt')).fromNow();
    }
  }),

  duration: Ember.computed('duration_ms', {
    get() {
      var duration = moment.duration(this.get('duration_ms'))
      return `${duration.minutes()}:${duration.seconds()}`;
    }
  })
});