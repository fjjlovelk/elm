const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/elm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch(err => {
    console.log(err)
  })
