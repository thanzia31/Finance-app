
const mongoose = require('mongoose');

const emiCalcSchema = new mongoose.Schema({
  principal: {type: Number,required: true},
  rate: {type: Number,required: true},
  months: {type: Number,required: true},
  emi: {type: Number,required: true},
  total: {type: Number,required: true},
  interest: {type: Number,required: true},
  createdAt: {type: Date,default: Date.now}
});

const investmentSchema = new mongoose.Schema({
  principal: {type: Number,required: true},
  rate: {type: Number,required: true},
  years: {type: Number,required: true},
  frequency: {type: Number,required: true},
  maturityAmount: {type: Number, required: true},
  interest: {type: Number,required: true },
  createdAt: {type: Date,default: Date.now}
});

module.exports = mongoose.model('EMI', emiCalcSchema);
