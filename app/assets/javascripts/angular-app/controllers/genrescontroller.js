function GenresController(GenresService, $stateParams) {
  var ctrl = this;

  GenresService
    .getGenres()
    .then(function(data) {
      ctrl.genres = data.data.genres
    })

  // ctrl.genres = Genre.query();
};


angular
  .module('app')
  .controller('GenresController', GenresController);
