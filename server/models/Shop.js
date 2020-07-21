const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  telphone: { type: Number, required: true },
  address: { type: String, required: true },
  description: { type: String },
  slogan: { type: String },
  open_time: { type: String },
  close_time: { type: String },
  category: { type: mongoose.SchemaTypes.ObjectId, ref: 'ShopSubCategory' },
  delivery_fee: { type: Number, min: 0 },
  starting_price: { type: Number, min: 0 },
  feature: {
    is_brand: { type: Boolean },
    is_delivery: { type: Boolean },
    is_new: { type: Boolean },
    is_ensure: { type: Boolean },
    is_ontime: { type: Boolean },
    is_bill: { type: Boolean }
  },
  shop_img: { type: String }
})

module.exports = mongoose.model('Shop', schema)