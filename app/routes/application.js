import Ember from 'ember';

export default Ember.Route.extend({
  title: "Spotyness",
  beforeModel: function() {
    return this.get('store').find('playlist');
  }
});