/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

// Require and use Express
var express = require("express");
var app = express();
app.use(express.static('public'));

// Require and use Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Require mongoose
var mongoose = require("mongoose");

////////////////////
//  DATA
///////////////////

var strains = [];
var nextId = 1;

////////////////////
//  ROUTES
///////////////////

// Define the root route: localhost:3000/
app.get('/', function(req,res){
	res.sendFile('index.html', { root : __dirname});
});

//Get all strain reccomendations
app.get('/api/strains', function(req, res){
	// Find strain data from database and save it as a variable 'strains'
	var strains = db.Strain.find(function(err, data){
		// Send all strain reccomendations as JSON response
		res.json(data);
	});
});

// Get one strain reccomendation 
app.get('/api/strains/:id', function(req, res){
	// Find one strain by Id
	db.Strain.findOne({_id: req.params.id}, function(err, data){
		// Send one strain reccomendation as JSON response
		res.json(data);
	});
});

app.post('/api/strains', function(req, res){
	// Create a new strain reccomendation
});

app.listen(process.env.PORT || 3000, function(){
console.log('Exoress server is up and running on http://localhost:/3000/');
});