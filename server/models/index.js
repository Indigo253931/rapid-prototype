var mongoose = require('mongoose');
mongoose.connect('mongodb://locahost/api/strains');

var Strain = require('./strain');

module.exports.Strain = Strain;
