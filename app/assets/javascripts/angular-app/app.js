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
        controller: function ($scope, $stateParams, $http) {
            $http.get('/api/movies/' + $stateParams.id)
            .then(function (result) {
                $scope.movie = result.data;
                console.log(Auth.currentuser());
            });
          }
      })
      .state('help', {
        url: '/help',
        templateUrl: 'help.html',
        controller: 'HelpController as control'
      })
      $urlRouterProvider.otherwise('/movies');
  })
  .run(['Auth', function (Auth) {
    Auth.currentUser().then(function(user) {
      console.log(user);
      console.log(Auth._currentUser);
    });
  }]);
