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
var mongoose=require("mongoose");


// Strains array
var strains = [];
var nextId = 1;

app.get('/strains', function(req,res){
	db.Strain.find()
}