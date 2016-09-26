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
        controller: 'HelpController as control'
      })
      .state('genre', {
        url: '/genres/:id',
        templateUrl: 'genreshow.html',
        controller: 'GenreShowController'
      })
      $urlRouterProvider.otherwise('/movies');
  })
  .run(['Auth', function (Auth) {
    Auth.currentUser().then(function(user) {
      console.log(user);
      console.log(Auth._currentUser);
    });
  }]);
