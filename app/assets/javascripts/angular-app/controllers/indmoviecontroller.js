function IndMovieController($stateParams, MovieService) {
  var ctrl = this;

  MovieService
    .getMovie()
    .then(function(data) {
      console.log(data)
      ctrl.movie = data.data
    })
}



angular
  .module('app')
  .controller('IndMovieController', IndMovieController)
