var mongoose = require('mongoose');

var userModel = mongoose.model('User', new mongoose.Schema({
	number_phone : String ,
	profile_img : String,
	background_img : String,
	username : String ,
	full_name : String,
	email : String ,
	type_acc : {type: String, enum: [
		'admin', 'mod', 'business', 'normal']},
	public_api_key : String,
	private_api_key : String,
	last_login : String,
	created_at : String,
	followers : [String],
	following : [String]
}));

module.exports = userModel;