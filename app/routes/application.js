import Ember from 'ember';

export default Ember.Route.extend({
  title: "Spotyness",

  beforeModel() {
    if (this.get('session.isLogged')) {
      var dependencies = [this.get('store').find('playlist'), this.get('store').find('playlist', {user_id: "spotify"}) ];

      return Ember.RSVP.all(dependencies);
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