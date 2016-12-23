var express = require('express');
var router = express.Router();
 
//var auth = require('./auth.js');
var eController = require('../controllers/events_controller.js');
var uController = require('../controllers/users_controller.js');

router.route('/setup')
	.post(uController.setupUser);

module.exports = router;

