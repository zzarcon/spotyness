import Ember from 'ember';

export default Ember.Route.extend({
  title: "Spotyness",
  
  beforeModel: function() {
    return this.get('store').find('playlist');
  },

  actions: {
    play(track) {
      if (!track) return;

      this.controllerFor('application').play(track);
    }
  }
});