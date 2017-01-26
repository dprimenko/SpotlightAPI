var Event = require('../models/event.js');

// GET
exports.findAllEvents = function(req, res) {
		Event.find({}, function(err, events) {
			if (!err) {
  				res.status(200).jsonp(events);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

exports.findEventById = function(req, res) {
		Event.findById(req.params.id, function(err, event) {
			if (!err) {
				res.status(200).jsonp(event);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

// POST
exports.addEvent = function(req, res) {
		var event = new Event({
			creator : 		req.body.creator,
			title : 		req.body.title,
			img : 			req.body.img,
			address : 		req.body.address,
			description : 	req.body.description,
			category : 		req.body.category,
			datetime_from : req.body.datetime_from,
			datetime_to : 	req.body.datetime_to,
			people_in : 	req.body.people_in
		});

		event.save(function(err, event) {
			if(!err) {
  				res.status(200).jsonp(event);
  			} else {
  				console.log('ERROR: ' + err);
  			}
		});
	};

// PUT
exports.updateEvent = function(req, res) {
		Event.findById(req.params.id, function(err, event) {
			event.creator = req.body.creator;
			event.title = req.body.title;
			event.img = req.body.img;
			event.address = req.body.address;
			event.description = req.body.description;
			event.category = req.body.category;
			event.datetime_from = req.body.datetime_from;
			event.datetime_to = req.body.datetime_to;
			event.people = req.body.people;

			event.save(function(err) {
				if(!err) {
  					res.status(200).jsonp(event);
  				} else {
  					console.log('ERROR: ' + err);
  				}
			});
		});
	};

// DELETE
exports.deleteEvent = function(req,res) {
	Event.remove({"_id" : req.params.id}, function(err) {
		if (!err) {
			res.send(200, "Eventos eliminados");
		}
		else {
  			res.send(500, err.message);
  		}
	});
};
