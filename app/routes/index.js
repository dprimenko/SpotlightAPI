var express = require('express');
var router = express.Router();
 
//var auth = require('./auth.js');
var eController = require('../controllers/events_controller.js');
var uController = require('../controllers/users_controller.js');

router.route('/setup')
	.post(uController.setupUser);

router.route('/users')
	.get(uController.findAllUsers);

router.route('/events')
	.get(eController.findAllEvents)
	.post(eController.addEvent);

router.route('/event/id/:id')
	.get(eController.findEventById)
	.put(eController.updateEvent)
	.delete(eController.deleteEvent);

router.route('/user/numberphone/:number_phone')
	.get(uController.findUserByNumberPhone);

router.route('/user/id/:id')
	.get(uController.findUserById);

module.exports = router;

