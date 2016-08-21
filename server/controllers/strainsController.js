angular.module('MyStrain')

	.controller('StrainsController', StrainsController)
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/templates/strains-index.html',
			controller: 'StrainsCtrl'
		})
		.when('strains/:id', {
			templateUrl: '/templates/strains-show.htmkl',
			controller: 'StrainsShowCrl'
		});
	});


var Strain = require('../models/Strain');

StrainsIndexCtrl.$inject=['$resource', 'StrainService'];
StrainsShowCtrl.$inject=['$resource', 'StrainService'];

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

