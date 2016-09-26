function GenreShowController(GenresService, $stateParams) {
  var ctrl = this;

  GenresService
    .getGenre()
    .then(function(data) {
      console.log(data)
      ctrl.genre = data.data;
    })
}




angular
  .module('app')
  .controller('GenreShowController', GenreShowController)
