const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  name: { type: String },
  sex: { type: Boolean, default: true },
  mobile: { type: String },
  address: { type: String },
  house_num: { type: String }
})

module.exports = mongoose.model('Address', schema)