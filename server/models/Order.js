const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  address: { type: mongoose.SchemaTypes.ObjectId, ref: 'Address' },
  shop: { type: mongoose.SchemaTypes.ObjectId, ref: 'Shop' },
  goods: [{
    id: { type: mongoose.SchemaTypes.ObjectId, ref: 'Goods' },
    count: { type: Number }
  }],
  packing_fee: { type: Number, min: 0, default: 0 },
  total: { type: Number, min: 0, default: 0 },
  tableware_num: { type: Number, min: 0, default: 0 },
  note: { type: String },
  is_bill: { type: Boolean },
  is_pay: { type: Boolean }
})

module.exports = mongoose.model('Order', schema)