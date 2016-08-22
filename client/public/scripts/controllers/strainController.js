angular.module('MyStrain')
	
/////////////////
// CONTROLLERS //
/////////////////

// .controller('StrainsController', StrainsController)
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


var Strain = require('../models/Strain');


// StrainsIndexCtrl.$inject=['$resource'];
// StrainsShowCtrl.$inject=['$resource'];

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
		activity: '',
		description: 'The strain you reach for when that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag.',
	},

	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: '',
		description: ''
	},

	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: '',
		description: ''
	}];
}

function StrainsIndexCtrl($resource) {
	$resource.strain = [
	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: '',
		description: ''
	},

	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: '',
		description: ''
	},

	{
		name: 'Cinex',
		kind: 'Sativa',
		activity: '',
		description: ''
	}];
}


