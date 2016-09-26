
function MoviesController(Movie, $state, $stateParams, $scope) {
  var ctrl = this;

  ctrl.movies = Movie.query();
};


angular
  .module('app')
  .controller('MoviesController', MoviesController)
