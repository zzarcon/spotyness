import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(modelName, id, snapshot, requestType, query) {
    var playlistId = query.playlist_id;
    var artistId = query.artistId;

    if (playlistId) {
      return `${this.get('host')}/users/${this.get('session.user.id')}/playlists/${playlistId}/tracks`;
    }

    if (artistId) {
      let country = navigator.language.split('-')[1] || 'US';

      return `${this.get('host')}/artists/${artistId}/top-tracks?country=${country}`;
    }
  }
});
