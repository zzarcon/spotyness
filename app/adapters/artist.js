import DS from "ember-data";

export default DS.RESTAdapter.extend({
  buildURL: function(modelName, id) {
    id = id ? '/' + id : '';

    return this.get('host') + '/artists' + id;
  }
});