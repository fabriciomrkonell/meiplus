'use strict';

var express = require('express'),
		router = express.Router();

router.get('/perfil', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Perfil',
  	page: '../profile.html',
  	requiresJS: ['app/controllers/profile']
  });
});

router.get('/participantes', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Participantes',
  	page: '../participant.html',
  	requiresJS: ['app/controllers/participant']
  });
});

module.exports = router;