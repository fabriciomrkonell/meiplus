'use strict';

var express = require('express'),
		router = express.Router(),
    Property = require('../models/property'),
    service = require('../services/service');

router.get('/', function(req, res, next) {
  Property.find({
    userId: req.user._id
  }, function(err, properties) {
    res.send({ error: 0, data: properties });
  });
});

router.get('/select', function(req, res, next) {
  Property.find({
    userId: req.user._id
  }).select('_id name').exec(function(err, properties) {
    res.send({ error: 0, data: properties });
  });
});

router.post('/', function(req, res, next) {
  Property.findById(req.body._id, function(err, property) {
    if(property === null){
      property = new Property();
      property.userId = req.user._id;
      property.dateCreate = new Date();
    }
    property.description = req.body.description;
    property.invoice = req.body.invoice;
    property.purchase = req.body.purchase;
    property.accountingAccount = req.body.accountingAccount;
    property.price = req.body.price;
    property.depreciationYear = req.body.depreciationYear;
    property.depreciationMonth = req.body.depreciationMonth;
    property.depreciation = req.body.depreciation;
    property.participantId = req.body.participantId;
    property.save(function(err){
      if(err){
        res.send({ error: 1, message: err.errors });
      }else{
        res.send({ error: 0, data: property, message: 'Salvo!' });
      }
    });
  });
});

module.exports = router;