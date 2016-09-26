
function MoviesController(MovieService, $state, $stateParams, $scope) {
  var ctrl = this;

  MovieService
    .getMovies()
    .then(function(data) {
      ctrl.movies = data.data;
    })
};


angular
  .module('app')
  .controller('MoviesController', MoviesController)
