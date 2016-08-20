angular.module('MyStrain')
.controller('StrainsController', StrainsController)
.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: index.html
	});
});

StrainsController.$inject=['$resource'];

function StrainsController($resource){
	var self = this;
	this.all = [];

function get(){
	$resource.get('')
	.then(function(response){
		self.all = response.data;
	});
}
}

