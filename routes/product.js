'use strict';

var express = require('express'),
		router = express.Router(),
    Product = require('../models/product'),
    service = require('../services/service');

router.get('/', function(req, res, next) {
  Product.find({
    userId: req.user._id
  }, function(err, products) {
    res.send({ error: 0, data: products });
  });
});

router.post('/', function(req, res, next) {
  Product.findById(req.body._id, function(err, product) {
    if(product === null){
      product = new Product();
      product.userId = req.user._id;
      product.dateCreate = new Date();
    }
    product.name = req.body.name;
    product.description = req.body.description;
    product.descriptionReduced = req.body.descriptionReduced;
    product.unit = req.body.unit;
    product.type = req.body.type;
    product.typeProduct = req.body.typeProduct;
    product.barCode = req.body.barCode;
    product.commission = req.body.commission;
    product.promotion = req.body.promotion
    product.price = req.body.price;
    product.pricePromotion = req.body.pricePromotion;
    product.priceSale = req.body.priceSale;
    product.operationalCost = req.body.operationalCost;
    product.discount = req.body.discount;
    product.stockMin = req.body.stockMin;
    product.stockMax = req.body.stockMax;
    product.lastIncrease = req.body.lastIncrease;
    product.promotionValidity = req.body.promotionValidity;
    product.participantId = req.body.participantId;
    product.save(function(err){
      if(err){
        res.send({ error: 1, message: err.errors });
      }else{
        res.send({ error: 0, data: product, message: 'Salvo!' });
      }
    });
  });
});

module.exports = router;