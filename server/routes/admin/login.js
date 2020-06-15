const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const AdminUser = require('../../models/AdminUser')

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await AdminUser.findOne({ username }).select('+password')
    let token = null
    if (!user) {
      const newUser = await AdminUser.create(req.body)
      token = jwt.sign({ id: newUser._id }, req.app.get('secret'))
      res.sendResult(token, 200, '登录成功')
    } else {
      token = jwt.sign({ id: user._id }, req.app.get('secret'))
      const isValid = require('bcrypt').compareSync(password, user.password)
      if (isValid) {
        res.sendResult(token, 200, '登录成功')
      } else {
        res.sendResult(isValid, 422, '密码错误')
      }
    }
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

module.exports = router