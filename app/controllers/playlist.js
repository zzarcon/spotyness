import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  actions: {
    play: function(track) {
      this.get('controllers.application').play(track);
    }
  }
});