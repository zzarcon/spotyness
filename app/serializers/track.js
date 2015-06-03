import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    if (payload.href) {
      var playlistId = payload.href.split('playlists/')[1].split('/tracks')[0];
      var tracks = payload.items.map(function(item) {
        if (!item.track.id) return;

        item.track.addedAt = item.added_at;
        item.track.addedBy = item.added_by;
        item.track.isLocal = item.is_local;
        item.track.playlistId = playlistId;

        return item.track;
      }).compact();
      payload = {tracks: tracks};
    }

    return this._super(store, type, payload);
  }
});