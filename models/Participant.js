'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Participant = new Schema({
	name: String,
	nickname: String,
 	email: String,
  phone: String,
  cnpj: String,
  stateRegistration: String,
  cep: String,
  street: String,
  neighborhood: String,
  number: String,
  city: String,
  dateCreate: Date,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Participant', Participant);