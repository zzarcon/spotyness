import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  displayName: attr('string'),
  email: attr('string'),
  type: attr('string'),
  images: attr(),
  followers: attr()
});