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

router.get('/produtos', function(req, res, next) {
  res.render('layouts/default', {
    title: 'Produtos',
    page: '../product.html',
    requiresJS: ['app/controllers/product']
  });
});

router.get('/imobilizados', function(req, res, next) {
  res.render('layouts/default', {
    title: 'Imobilizados',
    page: '../property.html',
    requiresJS: ['app/controllers/property']
  });
});

module.exports = router;