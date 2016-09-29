angular.module('MyPhoto')

.directive('testimonials', function(testimonialsService, $timeout) {
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: './app/templates/testimonials.html',
		controller: function($scope) {
			testimonialsService.getTestimonials()
			.then(function(response) {
				$scope.testimonials = response
			}, function(error) {
				console.error(error)
			})
		},
		link: function(scope, elem, attr, ctrl) {
			$timeout(function() {
				salvattore.registerGrid(elem[0])
			}, 1000)
		}
	}
})
