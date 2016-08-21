var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StrainSchema = new Schema({
	name: String,
	activity: String
});

var Strain = mongoose.model('Strain', StrainSchema);
module.exports = Strain;