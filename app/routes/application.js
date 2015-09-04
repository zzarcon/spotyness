import Ember from 'ember';

export default Ember.Route.extend({
  title: "Spotyness",

  beforeModel() {
    if (this.get('session.isLogged')) {
      return this.get('store').find('playlist');
    } else {
      this.transitionTo('login');
    }
  },

  actions: {
    play(track) {
      if (!track) return;

      this.controllerFor('application').play(track);
    }
  }
});