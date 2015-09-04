import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    spotyLogin() {
      this.get('session').login();
    }
  }
});