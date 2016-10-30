function IndMovieController($stateParams, MovieService) {
  var ctrl = this;
  MovieService
    .getMovie()
    .then(function(data) {
      ctrl.movie = data.data.movie;
    })

  console.log(ctrl)
  ctrl.reserve = function() {
    stock = 'Not in Stock'
    this.movie.reserved = true;
    MovieService
      .editMovie(this)
  };

}



angular
  .module('app')
  .controller('IndMovieController', IndMovieController)
