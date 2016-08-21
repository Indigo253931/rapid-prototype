/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

// Require and use Express
var express = require('express');
var app = express();
app.use(express.static('public'));

// Require and use Body Parser
var bodyParser = require('body-parser');
app.use(express.json());
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Body parser config to accept datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// Require mongoose
var mongoose = require('mongoose');

// Require model
var Strain = require('./models/strain');


/************
 * DATABASE *
 ************/
var db = require('./models');

////////////////////
//  DATA
///////////////////

var strains = [];
var nextId = 1;

app.get('/', function homepage (req,res) {
	res.sendFile('/public/index.html', { root : __dirname});
});

////////////////////
//  API ROUTES
///////////////////

/*
 * HTML Endpoints
 */

// Serve static files from public folder
app.get('/', function homepage (req,res) {
	res.sendFile(__dirname + '/public/index.html');
});

/*
 * JSON API Endpoints
 */
 app.get('/api/strains', function api_index (req, res) {
 	res.json({
 		message: 'Welcome to MyStrain!',
 		documentation_url: 'https://github.com/Indigo253931/rapid-prototype',
 		base_url: 'http://mystrain.herokuapp.com',
 		endpoints: [
 		{method:'GET', path: '/api/strains', description: 'Describes available endpoints'}
 		]
 	});
 });

// //Get all strain reccomendations
app.get('/api/strains', function strains_index (req, res){
	// Find strain data from database and save it as a variable 'strains'
	db.Strain.find({}, function(err, strains){
		// Send all strain reccomendations as JSON response
		res.json(strains);
	});
});

// Get one strain reccomendation 
app.get('/api/strains/:id', function strainsShow(req, res){
	console.log('requested strain id=', req.params.id);
		// ' Find one strain by Id
	db.Strain.findOne({_id: req.params.id}, function(err, data){
		// Send one strain reccomendation as JSON response
		res.json(strain);
	});
});

// Create new strain reccomendation
app.post('/api/strains/:strainId', function create (req, res) {
	console.log('body', req.body);
	db.Strain.findOne({_id: req.params.strainId}, function(err, album){
		if (err) {console.log('error', err); }
			var strain = new db.Strain(req.body);
				strains.push(strain);
				strain.save(function(err, savedStrain){
				console.log('Strain reccomendation saved:', savedStrain);
				res.json(strain);
			});
		});
});

// Connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/crud-api'
);


/**********
 * SERVER *
 **********/

// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
console.log('Exoress server is up and running on http://localhost:/3000/');
});