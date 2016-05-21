'use strict';

var express = require('express'),
		router = express.Router(),
		passport = require('passport'),
		User = require('../models/user');

router.get('/login', function(req, res, next) {
  res.render('layouts/login', {
  	title: 'Login'
  });
});

router.post('/login', function(req, res, next) {
   passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/home');
    });
  })(req, res, next);
});

router.post('/register', function(req, res) {
  User.register(new User({
    username : req.body.username
  }), req.body.password, function(err, user) {
    if (err) {
    	res.redirect('/login');
    }
    passport.authenticate('local')(req, res, function () {
      res.redirect('/home');
    });
  });
});

module.exports = router;