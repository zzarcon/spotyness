import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: function(model) {
    return `Artist: ${model.get('name')}`;
  },

  title: function(tokens) {
    return tokens.join('');
  },
  model: function(params) {
    return this.store.find('artist', params.artist_id);
  }
});