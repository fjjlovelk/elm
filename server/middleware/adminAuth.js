module.exports = async (req, res, next) => {
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../models/AdminUser')
  const token = (req.headers.authorization || '').split(' ').pop()
  if (!token) return res.sendResult(false, 401, 'token丢失，请重新登录')
  try {
    const { id } = jwt.verify(token, req.app.get('secret'))
    await AdminUser.findById(id)
    next()
  } catch (err) {
    res.sendResult(false, 401, '请先登录')
  }
}