var mongoose = require('mongoose');
mongoose.connect('mongodb://locahost/myStrain');

var Strain = require('./strain');

module.exports.Strain = Strain;
