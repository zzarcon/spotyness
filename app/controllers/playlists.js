import Ember from "ember";

export default Ember.ArrayController.extend({
  model: function() {
    return this.get('store').all('playlist');
  }.property(),

  mine: Ember.computed.filterBy('model', 'isMine'),
  notMine: Ember.computed.filterBy('model', 'isMine', false)
});