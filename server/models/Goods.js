const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  shop: { type: mongoose.SchemaTypes.ObjectId, ref: 'Shop' },
  detail: { type: String },
  imgUrl: { type: String },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'GoodsCategory' },
  feature: { type: String },
  packing_fee: { type: Number, min: 0 },
  price: { type: Number, min: 0 }
})

module.exports = mongoose.model('Goods', schema)