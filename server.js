/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

// Require and use Express
var express = require('express');
var app = express();
app.use(express.static('./client/public'));

// Require and use Body Parser
var bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Body parser config to accept datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// Require mongoose
var mongoose = require('mongoose');

/************
 * DATABASE *
 ************/
 
var db = require('./server/models');

////////////////////
//  DATA
///////////////////

var strains = [];
var nextId = 1;

/* * HTML Endpoints  */

app.get('/', function homepage (req,res) {
	res.sendFile('/public/index.html', { root : __dirname});
});

////////////////////
//  API ROUTES
///////////////////

 app.get('/api', function api_index (req, res) {
 	res.json({
 		message: 'Welcome to MyStrain!',
 		documentation_url: 'https://github.com/Indigo253931/rapid-prototype',
 		base_url: 'http://mystrain.herokuapp.com',
 		endpoints: [
 		{method:'GET', path: '/api/strains', description: 'Describes available endpoints'}
 		]
 	});
 });

 /* * JSON API Endpoints */

//Get all strain pairing reccomendations
app.get('/api/strains', function strainsIndex (req, res){
	// Find strain data from database and save it as a variable 'strains'
	db.Strain.find(function(err, strains){
		if (err) { return console.log('index error: ' + err); }
		// Send all strain pairing reccomendations as JSON response
		res.json(strains);
	});
});

// Get one strain pairing reccomendation
app.get('/api/strains/:name', function strainsShow(req, res){
		// Find one strain pairing reccomendation by Id
	db.Strain.findOne({name: req.params.name}, function(err, strain){
		if (err) { return console.log('show error: ' + err); }
		// Send one strain pairing reccomendation as JSON response
		res.json(strain);
	});
});

// Create new strain pairing reccomendation
app.post('/api/strains/new', function strainsCreate (req, res) {
	var newStrain;
		console.log(req.body);
		newStrain = new db.Strain({
		name: req.body.name,
		kind: req.body.kind,
		activity: req.body.activity,
		description: req.body.description,
});
	// Save newStrain to database
    newStrain.save(function(err, strain){
      if (err) {
        return console.log("save error: " + err);
      }
      // Send back the strain!
		res.json(strain);
		});
	});


/**********
 * SERVER *
 **********/

// Listen on port 3000
app.listen(process.env.PORT || 3000, function(){
console.log('Express server is up and running on http://localhost:/3000/');
});