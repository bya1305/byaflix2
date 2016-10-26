
function MoviesController(MovieService, $state, $stateParams, $scope) {
  var ctrl = this;

  MovieService
    .getMovies()
    .then(function(data) {
      console.log(data);
      ctrl.movies = data.data.movies;
    })
};


angular
  .module('app')
  .controller('MoviesController', MoviesController)
