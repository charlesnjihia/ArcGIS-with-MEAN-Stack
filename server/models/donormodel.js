var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DonorSchema   = new Schema({
    first_name: String,
	last_name: String,
	contact_number:String,
	email_address:String,
	blood_group:String,
	lon: Number,
	lat: Number,
	ip_address:String,
	date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('donors', DonorSchema);