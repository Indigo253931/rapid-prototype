// Create an Angular module and use resource directive
var app = angular.module('MyStrain', ['ngRoute'])
.controller('StrainsIndexController', StrainsIndexController)
.controller('StrainsShowController', StrainsShowController)
.controller('StrainsNewController', StrainsNewController);

	app.config(function ($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'index.html',
		})
		.when('strains', {
			templateUrl: 'templates/strains-index.html',
			controller: 'StrainsIndexCtrl'
		})
		.when('strains/:name', {
			templateUrl: 'templates/strains-show.html',
			controller: 'StrainsShowCtrl'
		})
		.when('strains/new', {
			templateUrl: 'templates/strains-new.html',
			controller: 'StrainsNewCtrl'
		});
	});

				/////////////////
				// CONTROLLERS //
				/////////////////

	StrainsIndexController.$inject = ['$scope', '$http'];
	function StrainsIndexController($scope, $http){
		$http.get('http://localhost:3000/api/strains')
		.then(function(response){
			$scope.strains=response.strain;
			console.log($scope.strains);
		});
	}

	StrainsShowController.$inject = ['$scope', '$http', '$routeParams'];
	function StrainsShowController($scope, $http, $routeParams){
		$http.get('http://localhost:3000/api/strains/' + $routeParams.name)
		.then(function(response){
			$scope.strain=response.strain;
			console.log($scope.strain);
		});
	}

	StrainsNewController.$inject = ['$scope', '$http', '$routeParams'];
	function StrainsNewController($scope, $http, $routeParams){
		$http.post('http://localhost:3000/api/strains/', newStrain);
			console.log(newStrain);
		}
	

// console.log('Angular is working!');

// app.factory('MyStrainFactory', function($resource){
// 	return $resource('/api/strains/:name');
// });



 // app.controller('StrainsController', ['$scope', 'MyStrainFactory', function($scope, MyStrainFactory){
 // 	var strain = MyStrainFactory.query(); 
 //  }])


// function StrainsController($resource){
// 	var self = this;
// 	this.all = [];

// function getAll(req, res){
// 	$resource.get('')
// 	.then(function(response){
// 		self.all = response.strains;
// 	});
// }
// // }

// app.controller('StrainsShowCtrl', ['$scope', function($scope) {
// 	$scope.strain = [
// 	{
// 		name: 'Cinex',
// 		kind: 'Sativa',
// 		activity: ['Dancing', 'Hiking'],
// 		description: 'When that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag.'
// 	},

// 	{
// 		name: 'True OG',
// 		kind: 'Indica',
// 		activity: ['Studying'],
// 		description: 'Sometimes what you need to concentrate isn’t a strain that speeds your brain up, it’s one that can slow the brain down. The indica-dominant True OG knocks down stress and distractions for easier focus.'
// 	},

// 	{
// 		name: 'Durban Poison',
// 		kind: 'Sativa',
// 		activity: ['Skiing'],
// 		description: 'An unforgettable skiing experience!'
// 	},
// 	{ 		
// 		name: 'Sour Diesel',
// 		kind: 'Sativa',
// 		activity: ['Concerts', 'Art'],
// 		description: 'An energetic, exhilarating sativa that induces intense cerebral effects. '
// }];
// }]);

// app.controller('StrainsIndexCtrl', ['$scope', function($scope) {
// 	$scope.strain = [
// 	{
// 		name: 'Cinex',
// 		kind: 'Sativa',
// 		activity: ['Dancing', 'Hiking'],
// 		description: 'When that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag.'
// 	}];
// }]);

/////////////////
// Directives //
/////////////////

angular.module('MyStrain')
.directive('myStrain', myStrain);

function myStrain(){
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/strainDirective.html',
		scope: {
			question: '@'
		}
	};
	return directive;
}