import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['tracks-list-component'],
  tagName: "table",
  //If the user has the track in some playlist
  fromPlaylist: true,

  actions: {
    changeSort() {

    },

    play() {
      debugger;
    }
  }
});