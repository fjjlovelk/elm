const express = require('express')
const app = express()
const authMiddleware = require('./middleware/auth')

// 用来加密和解锁token的密钥
app.set('secret', '123456789fff')
app.use(require('cors')())
app.use(express.json())

require('./plugins/db')

app.use(require('./middleware/sendResult'))
app.use('/api/admin', require('./routes/admin/index'))
app.use('/api/uploads', authMiddleware, require('./routes/uploads'))
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})