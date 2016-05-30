'use strict';

var express = require('express'),
		router = express.Router(),
    AccountingAccount = require('../services/accountingAccount');

router.get('/select', function(req, res, next) {
  res.send({ error: 0, data: AccountingAccount });
});

module.exports = router;