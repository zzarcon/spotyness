import Ember from 'ember';

export default Ember.View.extend({
  elementId: "spotyness",
  isQueryPresent: Ember.computed.bool('controller.searchQuery'),
  showSearchResults: Ember.computed.and('isQueryPresent', 'isInputFocused'),

  setupEvents: function() {
    var input = this.$('#search-query');

    input.on('focusin focusout', function() {
      this.toggleProperty('isInputFocused');
    }.bind(this));
  }.on('didInsertElement')
});