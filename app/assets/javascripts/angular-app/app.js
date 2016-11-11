angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'Devise'])
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
      .state('edit', {
        url: '/user/edit',
        templateUrl: 'edit.html',
        controller: 'UserController as ctrl'
      });
      $urlRouterProvider.otherwise('/movies');
  });
