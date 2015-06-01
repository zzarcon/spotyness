import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['playlists'],
  actions: {
    login: function() {
      this.get('session').login(function() {
        console.log('login!');
      });
    }
  }
});