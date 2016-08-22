var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api_strains');

var Strain = require('./strain');

module.exports.Strain = Strain;
