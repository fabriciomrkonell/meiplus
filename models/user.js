'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	name: String,
	cnpj: String,
 	username: String,
  password: String,
  phone: String,
  cep: String,
  street: String,
  neighborhood: String,
  number: String,
  city: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);