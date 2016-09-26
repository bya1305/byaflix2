function IndMovieController($stateParams) {
  var ctrl = this;

function ($scope, $stateParams, $http) {
    $http.get('/api/movies/' + $stateParams.id)
    .then(function (result) {
        $scope.movie = result.data;
    });
  }
}



angular
  .module('app')
  .controller('IndMovieController', IndMovieController)
