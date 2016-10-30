function UserService($http, $stateParams, Auth) {
  var vm = this;
  Auth.currentUser()
  .then(function(user) {
    vm.user = user;
  })
  this.edit = function(user) {
    console.log(vm.user.id)
    return $http.patch('/api/users/' + vm.user.id, user);
  }

}


angular
  .module('app')
  .service('UserService', UserService)
