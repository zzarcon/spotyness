import Ember from 'ember';

function login(callback) {
  var CLIENT_ID = '8678c3aa274246d0a4fd5f7d213dc866';
  var REDIRECT_URI = 'http://localhost:4200/callback.html';

  function getLoginURL(scopes) {
    return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
      '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
      '&scope=' + encodeURIComponent(scopes.join(' ')) +
      '&response_type=token';
  }

  var url = getLoginURL([
    'user-read-email'
  ]);

  var width = 450,
    height = 730,
    left = (screen.width / 2) - (width / 2),
    top = (screen.height / 2) - (height / 2);

  window.addEventListener("message", function(event) {
    var hash = JSON.parse(event.data);
    if (hash.type == 'access_token') {
      callback(hash.access_token);
    }
  }, false);

  var w = window.open(url,
    'Spotify',
    'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
  );

}

function getUserData(accessToken) {
  return $.ajax({
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  });
}


export default Ember.Controller.extend({
  actions: {
    login: function() {
      login(function(accessToken) {
        getUserData(accessToken).then(function(response) {
          console.log(response);
        });
      });
    }
  }
});