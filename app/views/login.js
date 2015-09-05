import Ember from 'ember';

export default Ember.View.extend({
  elementId: "login-section",
  isGoogleButtonRendered: false,

  renderGoogleButton: function() {
    if (this.get('session.isLoggedInYoutube') || !this.get('session.googleAuth') || this.get('isGoogleButtonRendered')) {
      return;
    }
    
    this.set('isGoogleButtonRendered', true);

    gapi.signin2.render('signin-button', {
      scope: 'https://www.googleapis.com/auth/plus.login',
      fetch_basic_profile: false
    });
  }.observes('session.isLoggedInYoutube', 'session.isLoggedInSpotify', 'session.googleAuth').on('didInsertElement')
});