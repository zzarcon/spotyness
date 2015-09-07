import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(modelName, id, snapshot, requestType, query) {
    var playlistId = query.playlist_id;
    var artistId = query.artistId;

    if (playlistId) {
      let userId = query.user_id || this.get('session.user.id');
      let url = `${this.get('host')}/users/${userId}/playlists/${playlistId}/tracks`;

      return url;
    }

    if (artistId) {
      let country = navigator.language.split('-')[1] || 'US';

      return `${this.get('host')}/artists/${artistId}/top-tracks?country=${country}`;
    }
  }
});
