import Ember from 'ember';

export default Ember.Controller.extend({
  onLogin: function() {
    if (!this.get('session.isLogged')) {
      return;
    }

    this.transitionToRoute('application');
  }.observes('session.isLogged'),

  actions: {
    spotyLogin() {
      this.get('session').login();
    }
  }
});