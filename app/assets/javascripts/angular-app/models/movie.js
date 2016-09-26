angular
  .module('app')
  .factory('Movie', Movie)
function Movie($resource) {

  var Movies = $resource('/api/movies/:id.json', {id: '@id'});
  return Movies;
}
