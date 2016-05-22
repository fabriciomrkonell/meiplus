'use strict';

var express = require('express'),
		router = express.Router(),
    User = require('../models/user');

router.post('/', function(req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if(err){
      res.send({ error: 1, message: err });
    }
    res.send({ error: 0, data: user });
  });
});

router.post('/register', function(req, res, next) {
  User.findById(req.user._id, function(err, user) {
    if(err || user === undefined){
      res.send({ error: 1, message: err });
    }
    user.name = req.body.name;
    user.cnpj = req.body.cnpj;
    user.phone = req.body.phone;
    user.save(function(){
      res.send({ error: 0, data: user, message: 'Usuário salvo com sucesso!' });
    });
  });
});

module.exports = router;