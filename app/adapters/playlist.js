import DS from "ember-data";

export default DS.RESTAdapter.extend({
  buildURL: function(modelName, id, snapshot, requestType, query = {}) {
    id = id || query.playlist_id;
    id = id ? '/' + id : '';
    let userId = query.user_id || this.get('session.user.id');
    let url = `${this.get('host')}/users/${userId}/playlists${id}`
    // debugger;
    console.log('buildURL playlist', url);
    return url;

    // id = id || query.playlist_id;
    // id = id ? '/' + id : '';
    // let userId = query.user_id || this.get('session.user.id');

    // return `${this.get('host')}/users/${userId}${id}/playlists`;
  }
});