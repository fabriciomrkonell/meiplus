'use strict';

var express = require('express'),
		router = express.Router(),
    ChartAccount = require('../models/chartAccount'),
    service = require('../services/service');

router.get('/', function(req, res, next) {
  ChartAccount.find({
    userId: req.user._id
  }, function(err, chartAccounts) {
    res.send({ error: 0, data: chartAccounts });
  });
});

router.post('/', function(req, res, next) {
  ChartAccount.findById(req.body._id, function(err, chartAccount) {
    if(chartAccount === null){
      chartAccount = new ChartAccount();
      chartAccount.userId = req.user._id;
      chartAccount.dateCreate = new Date();
    }
    chartAccount.planeReference = req.body.planeReference;
    chartAccount.description = req.body.description;
    chartAccount.save(function(err){
      if(err){
        res.send({ error: 1, message: err.errors });
      }else{
        res.send({ error: 0, data: chartAccount, message: 'Salvo!' });
      }
    });
  });
});

module.exports = router;