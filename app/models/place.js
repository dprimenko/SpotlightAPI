var mongoose = require('mongoose');

var placeModel = mongoose.model('Place', new mongoose.Schema({
	creator : String,
	title : String,
	img : String ,
	address : String,
	description : String,
	category : {type: String, enum: [
		'Disco', 'Pub', 'Festival', 'Concert', 'Sports', 'Public', 'Technology', 'Gastronomy']},
	datetime_from : Date,
	datetime_to : Date,
	users_in : [String]
}));

module.exports = placeModel;