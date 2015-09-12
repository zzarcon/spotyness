import Ember from 'ember';
import DS from 'ember-data';
import env from "spotyness/config/environment";

//TODO: Create class for manage PromiseArray logic
export default Ember.Service.extend({
  featuredPlaylists: Ember.computed({
    get() {
      return DS.PromiseArray.create({
        init() {
          var promise = new Ember.RSVP.Promise((resolve) => {
            var request = Ember.$.get(`${env.apiHost}/browse/featured-playlists`);

            request.then((data) => resolve(data.playlists.items));
          });

          this.set('promise', promise);
        }
     });
    }
  }),

  followingArtists: Ember.computed({
    get() {
      return DS.PromiseArray.create({
        init() {
          var promise = new Ember.RSVP.Promise((resolve) => {
            var request = Ember.$.get(`${env.apiHost}/me/following?type=artist`);

            request.then((data) => resolve(data.artists.items.compact()));
          });

          this.set('promise', promise);
        }
     });
    }
  }),

  downloadSong(videoId) {
    var url = `${env.mp3trifyHost}/fetch_song/${videoId}`;

    return Ember.$.get(url);
  },

  getSongStatus(videoId) {
    var url = `${env.mp3trifyHost}/song_status/${videoId}`;

    return Ember.$.get(url); 
  }
});