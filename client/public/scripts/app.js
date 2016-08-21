// Use Angular's app module and resource directive
var app = angular.module('MyStrain', ['ngRoute', 'ngResource']);

console.log('Angular is working!');

app.use(function(req, res, next) {
	console.log('Middleware hit');
	console.log('%s request to %s', req.method, req.path);
	next();
});

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
	templateUrl: '/api/strains/id'
});

$.update({
	method: 'DELETE',
	templateUrl: '/api/strains/id'
});

ALL_STRAINS = [
{
	'name': 'Cinex',
	'kind': 'Sativa',
	'activity': 'Mental Energy and Engagement',
	'description': 'the strain you reach for when that cup of coffee didn’t do the job. Providing wired euphoria that feeds creativity, this sativa can rekindle interest in tasks that may otherwise be a drag. Take caution with this one if you’re prone to anxiety and racing thoughts; Cinex can turn that up in some individuals.'
},
{
	'name': 'True OG',
	'kind': 'Indica',
	'activity': 'Calming Focus',
	'description':  'Sometimes what you need to concentrate isn’t a strain that speeds your brain up, it’s one that can slow the brain down. The indica-dominant True OG is touted among reviewers for knocking down stress and distractions for easier focus.'
},
{
	'name': 'Durban Poison',
	'kind': 'Sativa',
	'activity': 'Skiing',
	'description': 'Unforgettable experience'
},
{
	'name': 'Sour Diesel',
	'kind': 'Sativa',
	'activity': ['Art', 'Concerts', 'Hiking'],
	'description': ' An energetic, exhilarating sativa that induces intense cerebral effects. Sour D is extremely fast-acting and is said to be a great mood-booster that won’t knock you on your ass. Users report feeling uplifted, happy, and energetic, with an overall sense of euphoria. We would highly recommend using a strain such as Sour Diesel if you’re in the mood to get active.'
},
{
	'name': 'Alaska ThunderF*ck',
	'kind': 'Sativa',
	'activity': ['Netflix: Sense8'],
	'description': 'Powerful and thought-provoking, this powerful strain is the perfect compliment to the reality-bending sci-fi show from the Wachowski siblings. With AT’s help, follow the interconnected stories of eight individuals around the globe as they use their unique powers of communication to fight the man hunting them down.'},

];
