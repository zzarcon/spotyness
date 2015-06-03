import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractFind: function(store, type, payload) {
    payload = {
      artist: payload
    };
    return this._super(store, type, payload);
  }
});