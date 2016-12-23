var mongoose = require('mongoose');

var userModel = mongoose.model('User', new mongoose.Schema({
	country_code : { type: String },
	number_phone : { type: String },
	profile_img : { type: String },
	nick : { type: String },
	full_name : { type: String },
	email : { type : String },
	type_acc : {type: String, enum: [
		'Admin', 'Mod', 'Business', 'Normal']},
	sp_api_key_id : { type: String },
	followers : { type: Array},
	following : { type: Array },
	last_login : { type: String},
	created : { type: String}
}));

module.exports = userModel;