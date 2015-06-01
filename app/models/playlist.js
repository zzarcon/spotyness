import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  type: attr('string'),
  uri: attr('string'),
  snapshotId: attr('string'),
  externalUrls: attr(),
  images: attr(),
  owner: attr(),
  collaborative: attr('boolean'),
  public: attr('boolean'),
  href: attr('string'),
  items: attr(),
  tracks: attr(),

  isMine: function() {
    return this.get('owner.id') === this.get('session.user.id');
  }.property('owner.id', 'session.user.id')
});