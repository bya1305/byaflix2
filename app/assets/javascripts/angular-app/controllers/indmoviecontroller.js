function IndMovieController(Auth, $stateParams, MovieService) {
  var ctrl = this;
  Auth.currentUser()
  .then(function(user) {
      // User was logged in, or Devise returned
      // previously authenticated session.
      ctrl.user = user;
    });
  MovieService
    .getMovie()
    .then(function(data) {
      ctrl.movie = data.data.movie;
    })
  ctrl.reserve = function() {
    stock = 'Not in Stock'
    this.movie.user_id = ctrl.user.id
    this.movie.reserved = true;
    MovieService
      .editMovie(this)
      console.log(this.movie.user_id)
  };

}



angular
  .module('app')
  .controller('IndMovieController', IndMovieController)
