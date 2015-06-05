import DS from "ember-data";

export default DS.RESTAdapter.extend({
  buildURL: function(type, id) {
    id = id ? '/' + id : '';

    return `${this.get('host')}/users/${this.get('session.user.id')}${id}/playlists`;
  }
});