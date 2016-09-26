function GenresService($http, $stateParams) {
  this.getGenres = function() {
    return $http.get('api/genres')
  };

  this.getGenre = function() {
    return $http.get('api/genres/' + $stateParams.id)
  }
};




angular
  .module('app')
  .service('GenresService', GenresService)
