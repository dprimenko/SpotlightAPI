var mongoose = require('mongoose');

var eventModel = mongoose.model('Event', new mongoose.Schema({
	creator : { type: String },
	title : { type: String },
	img : { type: String },
	address : { type: String },
	description : { type: String },
	category : {type: String, enum: [
		'Disco', 'Pub', 'Festival', 'Concert', 'Sports', 'Public']},
	datetime_from : { type: String },
	datetime_to : { type: String },
	people_in : { type: Array}
}));

module.exports =  eventModel;