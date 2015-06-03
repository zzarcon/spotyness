import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('artist', params.artist_id);
  }
});