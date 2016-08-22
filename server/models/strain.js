var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StrainSchema = new Schema({
	name: String,
	kind: String,
	activity: [String],
	description: String
});

var Strain = mongoose.model('Strain', StrainSchema);

module.exports = Strain;