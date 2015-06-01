import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    payload = {
      playlists: payload.items
    };
    return this._super(store, type, payload);
  },
});