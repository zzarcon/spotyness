import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType) {
    let areMine = payload.href.indexOf(this.session.get('user.href')) !== -1;
    let playlists = payload.items || [payload];

    if (areMine) {
      playlists.setEach('isMine', true);
    }

    payload = {
      playlists: playlists
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});