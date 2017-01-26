var mongoose = require('mongoose');

var userModel = mongoose.model('User', new mongoose.Schema({
	number_phone : String ,
	profile_img : String,
	nick : String ,
	full_name : String,
	email : String ,
	type_acc : {type: String, enum: [
		'Admin', 'Mod', 'Business', 'Normal']},
	sp_api_key_id : String,
	last_login : String,
	created : String,
	followers : [String],
	following : [String]
}));

module.exports = userModel;