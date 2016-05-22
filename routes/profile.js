'use strict';

var express = require('express'),
		router = express.Router(),
    User = require('../models/user'),
    service = require('../services/service');

router.get('/', function(req, res, next) {
  User.findById(req.user._id, function(err, user) {
    res.send({ error: 0, data: user });
  });
});

router.post('/profile', function(req, res, next) {
  User.findById(req.user._id, function(err, user) {
    user.name = req.body.name;
    user.cnpj = req.body.cnpj;
    user.phone = req.body.phone;
    user.cep = req.body.cep;
    user.street = req.body.street;
    user.neighborhood = req.body.neighborhood;
    user.number = req.body.number;
    user.city = req.body.city;
    user.save(function(err){
      if(err){
        res.send({ error: 1, message: err });
      }else{
        res.send({ error: 0, data: user, message: 'Salvo!' });
      }
    });
  });
});

router.post('/password', function(req, res, next) {
  if(service.isNullOrEmpty(req.body.password)){
     res.send({ error: 1, message: 'Senha inválida!' });
  }else{
    User.findByUsername(req.user.username, function(err, user) {
      user.setPassword(req.body.password, function(){
        user.save();
        res.send({ error: 0, data: user, message: 'Salvo!' });
      });
    });
  }
});


module.exports = router;