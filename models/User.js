'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	name: String,
	cnpj: Number,
 	username: String,
  password: String,
  phone: Number,
  cep: Number,
  street: String,
  neighborhood: String,
  number: Number,
  city: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);