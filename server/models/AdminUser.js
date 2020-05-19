const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 14
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
    set(val) {
      return require('bcrypt').hashSync(val, 10)
    }
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('AdminUser', schema)