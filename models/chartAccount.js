'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var ChartAccount = new Schema({
	planeReference: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  dateCreate: Date,
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('ChartAccount', ChartAccount);