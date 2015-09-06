import Ember from 'ember';
import DS from 'ember-data';
import env from "spotyness/config/environment";

export default Ember.Service.extend({
  featuredPlaylists: Ember.computed({
    get() {
      return DS.PromiseArray.create({
        init() {
          var promise = new Ember.RSVP.Promise((resolve) => {
            var request = Ember.$.get(`${env.apiHost}/browse/featured-playlists`);

            request.then((data) => {
              resolve(data.playlists.items);
            });
          });

          this.set('promise', promise);
        }
     });
    }
  })
});