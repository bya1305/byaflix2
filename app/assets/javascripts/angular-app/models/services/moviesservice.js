function MovieService($http,$stateParams) {
  this.getMovies = function() {
      return $http.get('/api/movies.json');
  };

  // this.getMovie = function () {
  //   return $http.get('/api/movies/' + $stateParams.id + '.json');
  // };
  //
  // this.editMovie = function(movie) {
  //   return $http.patch('api/movies/' + $stateParams.id + '.json',movie)
  // };
};

angular
      .module('app')
      .service('MovieService', MovieService);
