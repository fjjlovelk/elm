const express = require('express')
const router = express.Router()
const AdminUser = require('../../models/AdminUser')

router.get('/', async (req, res) => {
  const { pageNum , pageSize } = req.query
  const total = await AdminUser.countDocuments()
  const model = await AdminUser.find().skip((parseInt(pageNum) -1)*parseInt(pageSize)).limit(parseInt(pageSize))
  const ret = {
    total: total,
    data: model
  }
  res.sendResult(ret, 200, '获取管理员列表成功')
})

module.exports = router