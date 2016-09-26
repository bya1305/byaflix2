function MovieService($http,$stateParams) {
  this.getMovies = function() {
      return $http.get('/api/movies');
  };

  this.getMovie = function () {
    return $http.get('/api/movies/' + $stateParams.id);
  };

  this.editMovie = function(movie) {
    return $http.patch('api/movies/' + $stateParams.id,movie)
  };
};

angular
      .module('app')
      .service('MovieService', MovieService);
