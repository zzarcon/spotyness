import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('store').find('playlist');
  }
});