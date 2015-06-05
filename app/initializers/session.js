import Ember from "ember";
import env from "spotyness/config/environment";

function getLoginURL(scopes) {
  return 'https://accounts.spotify.com/authorize?client_id=' + env.clientId +
    '&redirect_uri=' + encodeURIComponent(env.redirectUri) +
    '&scope=' + encodeURIComponent(scopes.join(' ')) +
    '&response_type=token';
}

var Session = Ember.Object.extend({
  user: null,
  token: null,
  isLogged: Ember.computed.bool('user.id'),
  storageKey: 'spotify-token',
  scopes: ['user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read', 'user-library-read'],

  login: function(callback) {
    var url = getLoginURL(this.get('scopes'));
    var width = 450;
    var height = 730;
    var left = (screen.width / 2) - (width / 2);
    var top = (screen.height / 2) - (height / 2);

    window.addEventListener("message", function(event) {
      var hash = JSON.parse(event.data);
      if (hash.type !== 'access_token') return;

      this.setToken(hash.access_token);
      this.getMe();
      
      Ember.typeOf(callback) === "function" && callback(hash.access_token);
    }.bind(this), false);

    window.open(url,
      'Spotify',
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=${width},height=${height},top=${top},left=${left}`
    );
  },

  setToken: function(token) {
    localStorage.setItem(this.get('storageKey'), token);

    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
    });
  },

  removeToken: function() {
    localStorage.removeItem(this.get('storageKey'));

    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', null);
      }
    });
  },

  getMe: function() {
    var request = Em.$.get(`${env.apiHost}/me`);

    request.then(function(response) {
      this.set('user', response);
      //TODO: Remove this
      this.set('user.img', response.images[0].url);
    }.bind(this));

    request.error(this.login.bind(this));

    return request;
  },

  setPreviousToken: function() {
    var token = localStorage.getItem(this.get('storageKey'));

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!token) {
        this.login(resolve);
        return;
      }

      this.setToken(token);
      
      var me = this.getMe();
      me.then(resolve);
      me.error(resolve);
    }.bind(this));
  }
});

export function initialize(container, app) {
  app.register('session:main', Session, {singleton: true});
  var session = container.lookup('session:main');

  app.deferReadiness();
  session.setPreviousToken().then(app.advanceReadiness.bind(app));

  app.inject('controller', 'session', 'session:main');
  app.inject('route', 'session', 'session:main');
  app.inject('router', 'session', 'session:main');
  app.inject('view', 'session', 'session:main');
  app.inject('model', 'session', 'session:main');
  app.inject('adapter', 'session', 'session:main');
}

export default {
  name: 'session',
  initialize: initialize
};