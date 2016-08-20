// Use Angular's app module and resource directive
var app = angular.module('MyStrain', ['ngResource']);
console.log('Angular is working!');

// Create strain array 
var strains = [];

// GET, POST, PUT and DELETE methods
$.get({
	method: 'GET', 
	templateUrl: '/api/strains'
});

$.post({
	method: 'POST',
	templateUrl: '/api/strains'
});

$.update({
	method: 'PUT',
	templateUrl: '/api/strains/id'
});

$.update({
	method: 'DELETE',
	templateUrl: '/api/strains/id'
});
