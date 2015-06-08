import Ember from 'ember';

export default Ember.View.extend({
  elementId: "spotyness",
  isQueryPresent: Ember.computed.bool('controller.searchQuery'),
  showSearchResults: Ember.computed.and('isQueryPresent', 'isInputFocused'),

  setupEvents: function() {
    var input = this.$('#search-query');

    input.on('focusin focusout', function() {
      Ember.run.later(this, function() {
        this.toggleProperty('isInputFocused');
      }, 10);
    }.bind(this));
  }.on('didInsertElement'),

  removeAppLoader: function() {
    $('#app-loader').remove();
  }.on('didInsertElement'),

  renderGoogleButton: function() {
    if (this.get('session.isLoggedInYoutube') || !this.get('session.googleAuth')) {
      return;
    }

    gapi.signin2.render('signin-button', {scope: 'https://www.googleapis.com/auth/plus.login', fetch_basic_profile: false});
  }.observes('session.isLoggedInYoutube', 'session.googleAuth')
});