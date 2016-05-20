'use strict';

var express = require('express'),
		router = express.Router();

router.get('/', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Home',
  	page: '../index.html',
  	requiresJS: ['app/controllers/index']
  });
});

router.get('/realtime', function(req, res, next) {
  res.render('layouts/default', {
  	title: 'Tempo real',
  	page: '../realtime.html',
  	requiresJS: ['app/controllers/realtime', 'app/libraries/bootstraptreeview/js/bootstraptreeview.min']
  });
});

router.get('/transductor', function(req, res, next) {
  res.render('layouts/default', {
    title: 'Transductor',
    page: '../transductor.html',
    requiresJS: ['app/controllers/transductor']
  });
});

router.get('/users', function(req, res, next) {
  res.render('layouts/default', {
    title: 'Usuários',
    page: '../users.html',
    requiresJS: ['app/controllers/users']
  });
});

router.get('/profile', function(req, res, next) {
  res.render('layouts/default', {
    title: 'Perfil',
    page: '../profile.html',
    requiresJS: ['app/controllers/profile']
  });
});

module.exports = router;