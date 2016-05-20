'use strict';

var express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		User = require('../models/user');

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.post('/register', function(req, res) {
  User.register(new User({
    username : req.body.username
  }), req.body.password, function(err, user) {
    if (err) {
      return res.send(err);
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
});

router.get('/', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Menu',
  	page: '../menu.html',
  	requiresJS: ['app/controllers/menu']
  });
});

module.exports = router;