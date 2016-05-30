'use strict';

var express = require('express'),
		router = express.Router(),
    Participant = require('../models/participant'),
    service = require('../services/service');

router.get('/', function(req, res, next) {
  Participant.find({
    userId: req.user._id
  }, function(err, participants) {
    res.send({ error: 0, data: participants });
  });
});

router.get('/select', function(req, res, next) {
  Participant.find({
    userId: req.user._id
  }).select('_id name').exec(function(err, participants) {
    res.send({ error: 0, data: participants });
  });
});

router.post('/', function(req, res, next) {
  Participant.findById(req.body._id, function(err, participant) {
    if(participant === null){
      participant = new Participant();
      participant.userId = req.user._id;
      participant.dateCreate = new Date();
    }
    participant.name = req.body.name;
    participant.nickname = req.body.nickname;
    participant.email = req.body.email;
    participant.phone = req.body.phone;
    participant.cnpj = req.body.cnpj;
    participant.stateRegistration = req.body.stateRegistration;
    participant.cep = req.body.cep;
    participant.street = req.body.street;
    participant.neighborhood = req.body.neighborhood;
    participant.number = req.body.number;
    participant.city = req.body.city;
    participant.save(function(err){
      if(err){
        res.send({ error: 1, message: err.errors });
      }else{
        res.send({ error: 0, data: participant, message: 'Salvo!' });
      }
    });
  });
});

module.exports = router;