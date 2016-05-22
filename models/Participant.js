'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Participant = new Schema({
	name: {
    type: String,
    trim: true,
    required: true
  },
	nickname: String,
 	email: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    trim: true,
    required: true
  },
  cnpj: {
    type: String,
    trim: true,
    required: true
  },
  stateRegistration: String,
  cep: String,
  street: {
    type: String,
    trim: true,
    required: true
  },
  neighborhood: String,
  number: String,
  city: {
    type: String,
    trim: true,
    required: true
  },
  dateCreate: Date,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Participant', Participant);