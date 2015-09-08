import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    let areMine = payload.href.indexOf(this.get('session.user.href')) !== -1;
    let playlists = payload.items || [payload];

    if (areMine) {
      playlists.setEach('isMine', true);
    }

    payload = {
      playlists: playlists
    };

    return this._super(store, type, payload);
  }
});