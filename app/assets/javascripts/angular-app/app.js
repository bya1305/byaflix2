angular
  .module('app', ['ui.router','ngResource', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('home', {
        url: '/movies',
        templateUrl: 'home.html',
        controller: 'MoviesController as ctrl'
      })
      .state('home.show', {
        url: '/:id',
        templateUrl: 'show.html',
        controller: 'IndMovieController as ctrl'
      })
      .state('help', {
        url: '/help',
        templateUrl: 'help.html',
        controller: 'HelpController as ctrl'
      })
      .state('genre', {
        url: '/genres/:id',
        templateUrl: 'genreshow.html',
        controller: 'GenreShowController'
      })
      .state('user', {
        url: '/user',
        templateUrl: 'user.html',
        controller: 'UserController as ctrl'
      })
      $urlRouterProvider.otherwise('/movies');
  })
  .controller('myCtrl', function(Auth) {
        var ctrl = this;
        Auth.currentUser().then(function(user) {
            // User was logged in, or Devise returned
            // previously authenticated session.
            ctrl.user = user.data;
            console.log(user.email); // => {id: 1, ect: '...'}
        }, function(error) {
            // unauthenticated error
        });
    });
