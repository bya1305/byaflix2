function IndMovieController($stateParams, MovieService) {
  var ctrl = this;

  MovieService
    .getMovie()
    .then(function(data) {
      console.log(data)
      ctrl.movie = data.data.movie;
    })

  ctrl.reserve = function() {
    stock = 'Not in Stock'
    this.movie.reserved = true;
    MovieService
      .editMovie(this)
    console.log(this.movie);
  };

}



angular
  .module('app')
  .controller('IndMovieController', IndMovieController)
