angular.module('MyPhoto')
.service('testimonialsService', function($http, $q) {
  function getTestimonials() {
    var deferred = $q.defer()
    $http.get('./data/testimonials.json')

    .then(
      function(success) {
        deferred.resolve(success.data)
      },
      function(error) {
        deferred.reject(error)
      }
    )

    return deferred.promise
    
  }

  return {
    getTestimonials: getTestimonials
  }

})
