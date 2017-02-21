import Ember from "ember";
import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  followers: attr(),
  genres: attr(),
  images: attr(),
  href: attr('string'),
  name: attr('string'),
  popularity: attr('number'),
  type: attr('string'),
  uri: attr('string'),

  bigImg: Ember.computed.alias('images.firstObject.url'),
  smallImg: Ember.computed.alias('images.lastObject.url'),

  topTracks: Ember.computed({
    get() {
      return this.store.find('track', {artistId: this.get('id')});
    }
  })
});