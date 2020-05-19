const mongoose = require('mongoose')

const schemaOne = new mongoose.Schema({
  name: { type: String },
  level: { type: Number, default: 1 }
})

const schemaTwo = new mongoose.Schema({
  name: { type: String },
  level: { type: Number, default: 2 },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'ShopCategory' }
})

module.exports.Cate = mongoose.model('ShopCategory', schemaOne)
module.exports.SubCate = mongoose.model('ShopSubCategory', schemaTwo)