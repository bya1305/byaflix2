function UserService($http, $stateParams, Auth) {
  this.edit = function(user) {
    return $http.patch('/users', user);
  }

}


angular
  .module('app')
  .service('UserService', UserService)
