// Create an Angular module and use resource directive
var app = angular.module('MyStrain', ['ngRoute', 'ngResource']);
console.log('Angular is working!');

angular.module('MyStrain')

	
/////////////////
// CONTROLLERS //
/////////////////

 .controller('StrainsController', StrainsController)
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/templates/strains-index.html',
			controller: 'StrainsIndexCtrl'
		})
		.when('strains/:id', {
			templateUrl: '/templates/strains-show.html',
			controller: 'StrainsShowCtrl'
		});
	});

function StrainsController($resource){
	var self = this;
	this.all = [];

function getAll(req, res){
	$resource.get('')
	.then(function(response){
		self.all = response.strains;
	});
}
}

module.exports = {
	getAll: getAll
};



StrainCtrl.$inject = ['$resource'];

function StrainsShowCtrl($resource) {
	$resource.strain = [
	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: ['Dancing', 'Hiking'],
		description: 'When that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag.'
	},

	{
		name: 'True OG',
		kind: 'Indica',
		activity: ['Studying'],
		description: 'Sometimes what you need to concentrate isn’t a strain that speeds your brain up, it’s one that can slow the brain down. The indica-dominant True OG knocks down stress and distractions for easier focus.'
	},

	{
		name: 'Durban Poison',
		kind: 'Sativa',
		activity: ['Skiing'],
		description: 'An unforgettable skiing experience!'
	},
	{ 		
		name: 'Sour Diesel',
		kind: 'Sativa',
		activity: ['Concerts', 'Art'],
		description: 'An energetic, exhilarating sativa that induces intense cerebral effects. '
}];
}

function StrainsIndexCtrl($resource) {
	$resource.strain = [
	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: ['Dancing', 'Hiking'],
		description: 'When that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag.'
	},

	{
		name: 'True OG',
		kind: 'Indica',
		activity: ['Studying'],
		description: 'Sometimes what you need to concentrate isn’t a strain that speeds your brain up, it’s one that can slow the brain down. The indica-dominant True OG knocks down stress and distractions for easier focus.'
	},

	{
		name: 'Durban Poison',
		kind: 'Sativa',
		activity: ['Skiing'],
		description: 'An unforgettable skiing experience!'
	},
	{ 		
		name: 'Sour Diesel',
		kind: 'Sativa',
		activity: ['Concerts', 'Art'],
		description: 'An energetic, exhilarating sativa that induces intense cerebral effects.'
}];
}

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