// Create an Angular module and use resource directive
var app = angular.module('MyStrain', ['ngRoute', 'ngResource']);
console.log('Angular is working!');

// Set up express app to serve static files in public directory
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('Home controller hit');
  res.send('You are Home!');
});

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
	templateUrl: '/api/strains/:id'
});

$.delete({
	method: 'DELETE',
	templateUrl: '/api/strains/:id'
});
