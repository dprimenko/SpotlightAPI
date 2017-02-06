var express = require('express');
var router = express.Router();
 
//var auth = require('./auth.js');
var eController = require('../controllers/places_controller.js');
var uController = require('../controllers/users_controller.js');

router.route('/setup')
	.post(uController.setupUser);

router.route('/users')
	.get(uController.findAllUsers);

router.route('/places')
	.get(eController.findAllPlaces)
	.post(eController.addPlace);

router.route('/place/id/:id')
	.get(eController.findPlaceById)
	.delete(eController.deletePlace);

router.route('/user/numberphone/:number_phone')
	.get(uController.findUserByNumberPhone);

router.route('/user/id/:id')
	.get(uController.findUserById)
	.put(uController.updateUser);

module.exports = router;

