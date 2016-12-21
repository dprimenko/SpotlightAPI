var express = require('express');
var router = express.Router();
 
var auth = require('./auth.js');
var products = require('../controllers/controller_events.js');
var user = require('../controllers/controller_users.js');