function UserService($http, $stateParams, Auth) {
  var vm = this;
  Auth.currentUser()
  .then(function(user) {
    vm.user = user;
  })
  this.edit = function(user) {
    
    return $http.put('/api/users/' + vm.user.id + '.json', user);
  }

}


angular
  .module('app')
  .service('UserService', UserService)
