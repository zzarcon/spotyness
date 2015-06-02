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

  isActive: false
});
