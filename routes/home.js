'use strict';

var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Menu',
  	page: '../menu.html',
  	requiresJS: ['app/controllers/menu']
  });
});

module.exports = router;