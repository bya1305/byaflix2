function UserController(Auth, $scope, UserService) {
  // var vm = this;
  Auth.currentUser()
  .then(function(user) {
      // User was logged in, or Devise returned
      // previously authenticated session.
      $scope.user = user;

    });

  $scope.editUser = function(data){
    UserService
      .edit(data)
      .then(function(){
        console.log($scope.user)
        console.log('success')
      })

  }

}

angular
  .module('app')
  .controller('UserController', UserController)
