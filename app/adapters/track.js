import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, params) {
    var playlistId = params.playlist_id;
    var artistId = params.artistId;

    if (playlistId) {
      return this.get('host') + `/users/zzarcon/playlists/${playlistId}/tracks`;
    }

    if (artistId) {
      return this.get('host') + `/artists/${artistId}/top-tracks?country=ES`;
    }
  }
});