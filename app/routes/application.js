import Ember from 'ember';

export default Ember.Route.extend({
  title: "Spotyness",

  beforeModel() {
    if (this.session.get('isReady')) {
      //TODO: Do we need to do something here?
    } else {
      return this.startSession();
    }
  },

  startSession() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.session.start().then(() => {
        if (this.session.get('isLogged')) {
          var dependencies = [this.store.findAll('playlist'), this.store.queryRecord('playlist', {
            user_id: "spotify"
          })];

          Ember.RSVP.all(dependencies).then(resolve);
        } else {
          //TODO: Check what happen here
          resolve();
          this.transitionTo('login');
        }
      });
    });
  },

  actions: {
    play(track) {
      if (!track) return;

      this.controllerFor('application').play(track);
    }
  }
});