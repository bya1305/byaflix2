function UserController(Auth, UserService, $location, MovieService) {
  // var vm = this;
  var ctrl = this
  MovieService
    .getMovies()
    .then(function(data) {
      ctrl.movies = data.data.movies;
    })
  Auth.currentUser()
  .then(function(user) {
      // User was logged in, or Devise returned
      // previously authenticated session.
      ctrl.user = user;

    });

  ctrl.editUser = function(){

    UserService
      .edit(ctrl.user)
      .then(function(){
        console.log(ctrl.user)
        console.log('success')
        $location.path('user')
      })

  }

}

angular
  .module('app')
  .controller('UserController', UserController)
