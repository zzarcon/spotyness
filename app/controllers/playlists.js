import Ember from "ember";

export default Ember.ArrayController.extend({
  needs: ['playlist'],
  activePlaylist: Ember.computed.alias('controllers.playlist.content'),

  all: function() {
    return this.get('store').all('playlist');
  }.property(),

  content: function() {
    var activePlaylistId = this.get('activePlaylist.id');

    return this.get('all').map(function(playlist) {
      playlist.set('isActive', playlist.get('id') == activePlaylistId);
      return playlist;
    }, this);
  }.property('all', 'activePlaylist.id'),

  mine: Ember.computed.filterBy('content', 'isMine')
});