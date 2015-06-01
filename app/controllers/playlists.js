import Ember from "ember";

export default Ember.ArrayController.extend({
  content: function() {
    return this.get('store').all('playlist');
  }.property(),

  mine: Ember.computed.filterBy('content', 'isMine')
});