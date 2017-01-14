var User = require('../models/user.js');
var utils = require('../utils/utils.js')

exports.setupUser = function(req, res, callback) {

	var countryCode = req.body.country_code;
	var numberPhone = req.body.number_phone;

	userExists(countryCode, numberPhone, function(result) {
		if (!result) {
			utils.generateApiKey(function(genApikey) {
				var user = new User({
				country_code : req.body.country_code,
				number_phone : req.body.number_phone,
				profile_img : req.body.profile_img,
				nick : req.body.nick,
				full_name : req.body.full_name,
				email : req.body.email,
				type_acc : req.body.type_acc,
				sp_api_key_id : genApikey,
				followers : req.body.followers,
				following : req.body.following,
				last_login : req.body.last_login,
				created : req.body.created
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

exports.findAllUsers = function(req, res) {
	User.find({}, function(err, users) {
		if (!err) {
  			res.status(200).jsonp(users);
  		}
	});
};

function userExists(country, number, callback) {
	User.find({country_code: country, number_phone: number}, function(err, user) {
		callback(user.length);
	});
};