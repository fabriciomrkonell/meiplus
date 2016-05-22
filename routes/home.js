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

module.exports = router;