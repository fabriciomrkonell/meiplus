'use strict';

var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var Product = new Schema({
	name: {
    type: String,
    trim: true,
    required: true
  },
  description: String,
  descriptionReduced: String,
 	unit: {
    type: String,
    trim: true,
    required: true
  },
  type: {
    type: String,
    trim: true,
    required: true
  },
  typeProduct: {
    type: String,
    trim: true,
    required: true
  },
  barCode: Number,
  commission: Number,
  promotion: { type: Boolean, default: false },
  price: { type: Number, default: 0 },
  pricePromotion: { type: Number, default: 0 },
  priceSale: { type: Number, default: 0 },
  operationalCost: { type: Number, default: 0 },
  discount: { type: Number, default: 0 },
  stockMin: { type: Number, default: 0 },
  stockMax: { type: Number, default: 0 },
  lastIncrease: Date,
  promotionValidity: Date,
  dateCreate: Date,
  participantId: { type: Schema.Types.ObjectId, ref: 'Participant' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Product', Product);