'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Property = new Schema({
	description: {
    type: String,
    trim: true,
    required: true
  },
	invoice: String,
  purchase: Date,
  accountingAccount: String,
  price: {
    type: Number,
    trim: true,
    required: true
  },
  depreciationYear: Number,
  depreciationMonth: Number,
  depreciation: Number,
  dateCreate: Date,
  participantId: { type: Schema.Types.ObjectId, ref: 'Participant' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Property', Property);