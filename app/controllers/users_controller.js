var User = require('../models/user.js');
var utils = require('../utils/utils.js')

exports.setupUser = function(req, res, callback) {

	var numberPhone = req.body.number_phone;

	userExists(numberPhone, function(result) {
		if (!result) {
			utils.generateApiKey(function(genApikey) {
				var user = new User({
				number_phone : req.body.number_phone,
				profile_img : req.body.profile_img,
				nick : req.body.nick,
				full_name : req.body.full_name,
				email : req.body.email,
				type_acc : req.body.type_acc,
				sp_api_key_id : genApikey,				
				last_login : req.body.last_login,
				created : req.body.created,
				followers : req.body.followers,
				following : req.body.following
				});

				user.save(function(err, user) {
					if (!err) {
						res.status(200).jsonp(user);
						callback(true);
					}else {
						callback(false);
					}
				});
			});	
		} else {
			res.send("User already exists.");
		}
	});
};

exports.findUserByNumberPhone = function(req,res) {
	User.find({number_phone: req.params.number_phone}, function(err, user) {
		if (!err) {
			res.status(200).jsonp(user);
		}
	});
};

exports.findAllUsers = function(req, res) {
	User.find({}, function(err, users) {
		if (!err) {
  			res.status(200).jsonp(users);
  		}
	});
};

function userExists(number, callback) {
	User.find({number_phone: number}, function(err, user) {
		callback(user.length);
	});
};