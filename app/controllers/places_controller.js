var Place = require('../models/place.js');
var mongo = require('mongodb');

// GET
exports.findAllPlaces = function(req, res) {
		Place.find({}, function(err, places) {
			if (!err) {
  				res.status(200).jsonp(places);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

exports.findPlaceById = function(req, res) {
		Place.findById(req.params.id, function(err, place) {
			if (!err) {
				res.status(200).jsonp(place);
			} else {
				console.log('ERROR: ' + err);
			}
		});
	};

// POST
exports.addPlace= function(req, res) {
		var event = new Place({
			creator : 		req.body.creator,
			title : 		req.body.title,
			img : 			req.body.img,
			address : 		req.body.address,
			description : 	req.body.description,
			category : 		req.body.category,
			datetime_from : new Date(req.body.datetime_from),
			datetime_to : 	new Date(req.body.datetime_to),
			users_in : 	req.body.users_in
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
/*exports.updateEvent = function(req, res) {
		Place.findById(req.params.id, function(err, event) {
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
	};*/

// DELETE
exports.deletePlace = function(req,res) {
	Place.remove({"_id" : req.params.id}, function(err) {
		if (!err) {
			res.send(200, "Eventos eliminados");
		}
		else {
  			res.send(500, err.message);
  		}
	});
};
