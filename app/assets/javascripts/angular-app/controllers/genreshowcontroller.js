function GenreShowController(GenresService, $stateParams, $scope) {
  // var ctrl = this;

  GenresService
    .getGenre()
    .then(function(data) {
      console.log(data)
      $scope.genre = data.data.genre;
    })
}




angular
  .module('app')
  .controller('GenreShowController', GenreShowController)
