function UserController(Auth, $scope) {
  // var vm = this;
  Auth.currentUser()
  .then(function(user) {
      // User was logged in, or Devise returned
      // previously authenticated session.
      $scope.user = user;
      console.log(user.email); // => {id: 1, ect: '...'}
    });
}

angular
  .module('app')
  .controller('UserController', UserController)
