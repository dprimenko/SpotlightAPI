var mongoose = require('mongoose');

var eventModel = mongoose.model('Event', new mongoose.Schema({
	creator : String,
	title : String,
	img : String ,
	address : String,
	description : String,
	category : {type: String, enum: [
		'Disco', 'Pub', 'Festival', 'Concert', 'Sports', 'Public']},
	datetime_from : String,
	datetime_to : String,
	people_in : [String]
}));

module.exports = eventModel;