'use strict';

var express = require('express'),
		router = express.Router();

router.get('/all', function(req, res, next) {
  res.send({
    "_id": 1,
    "id": 0,
    "user": null,
    "password": "",
    "stations": [{
      "_id": 9,
      "id": null,
      "address": "0013A20040B9118A",
      "idName": "",
      "transductors": [{
        "_id": 11,
        "id": 0,
        "idName": "SDHT22T",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 25.5,
        "lastValue": 25.5,
        "lastValueDate": 1450652271636,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 12,
        "id": 0,
        "idName": "ARL",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Actuator",
        "value": 0.0,
        "lastValue": 0.0,
        "lastValueDate": 1450652263863,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 13,
        "id": 0,
        "idName": "ARL",
        "minValue": 20.0,
        "maxValue": null,
        "transductorType": "Actuator",
        "value": 0.0,
        "lastValue": 0.0,
        "lastValueDate": 1450652263863,
        "valid": true,
        "sequence": 1
      }, {
        "_id": 10,
        "id": 0,
        "idName": "SDHT22H",
        "minValue": 0.0,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 78.2,
        "lastValue": 78.1,
        "lastValueDate": 1450652271636,
        "valid": true,
        "sequence": 0
      }],
      "valid": false,
      "lastTime": 0
    }, {
      "_id": 2,
      "id": null,
      "address": "0013A20040D591B5",
      "idName": "",
      "transductors": [{
        "_id": 4,
        "id": 0,
        "idName": "SBMP85S",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 101344.0,
        "lastValue": 101341.0,
        "lastValueDate": 1450652257890,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 5,
        "id": 0,
        "idName": "SHUM",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 99.9,
        "lastValue": 99.9,
        "lastValueDate": 1450652260651,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 6,
        "id": 0,
        "idName": "SAHUM",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 99.9,
        "lastValue": 99.9,
        "lastValueDate": 1450652260651,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 7,
        "id": 0,
        "idName": "ARL",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Actuator",
        "value": 0.0,
        "lastValue": 0.0,
        "lastValueDate": 1450652267067,
        "valid": true,
        "sequence": 0
      }, {
        "_id": 8,
        "id": 0,
        "idName": "ARL",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Actuator",
        "value": 0.0,
        "lastValue": 0.0,
        "lastValueDate": 1450652267067,
        "valid": true,
        "sequence": 1
      }, {
        "_id": 3,
        "id": 0,
        "idName": "SBMP85",
        "minValue": null,
        "maxValue": null,
        "transductorType": "Sensor",
        "value": 101344.0,
        "lastValue": 101351.0,
        "lastValueDate": 1450652255092,
        "valid": true,
        "sequence": 0
      }],
      "valid": false,
      "lastTime": 0
    }],
    "script": {
      "id": null,
      "code": null
    },
    "autonomous": true,
    "syncTime": 5000,
    "collectTime": 2000,
    "port": "/dev/ttyUSB0",
    "baudRate": 9600,
    "persistLocal": true,
    "name": "Abrigo de cultivo",
    "description": "Abrigo de cultivo de plantas reflorestamento"
  });
});

module.exports = router;