import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    if (this.get('session.isLogged')) {
      this.transitionTo('application');
    }
  }
});