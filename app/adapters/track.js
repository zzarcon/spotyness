import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(type, params) {
    var id = params.playlist_id;

    return this.get('host') + '/users/zzarcon/playlists/' + id + '/tracks';
  }
});