const express = require('express')
const router = express.Router()
const AdminUser = require('../../models/AdminUser')

router.get('/', async (req, res) => {
  const ret = await AdminUser.find()
  res.sendResult(ret, 200, '获取管理员列表成功')
})

module.exports = router