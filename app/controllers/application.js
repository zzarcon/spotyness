import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      this.get('session').login(function() {
        console.log('login!');
      });
    }
  }
});