const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  shop: { type: mongoose.SchemaTypes.ObjectId, ref: 'Shop' }
})

module.exports = mongoose.model('GoodsCategory', schema)