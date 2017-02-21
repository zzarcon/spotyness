import Ember from "ember";

export default Ember.Controller.extend({
  model: function() {
    return this.store.peekAll('playlist');
  }.property(),

  mine: Ember.computed.filterBy('model', 'isMine'),
  notMine: Ember.computed.filterBy('model', 'isMine', false)
});