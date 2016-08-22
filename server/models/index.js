var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_strains');

module.exports.Strain = require('./strain.js');

