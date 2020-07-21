const express = require('express')
const router = express.Router()
const User = require('../../models/User')

router.get('/', async (req, res) => {
  try {
    const { pageNum, pageSize } = req.query
    const total = await User.countDocuments()
    const model = await User.find().skip((parseInt(pageNum) - 1) * parseInt(pageSize)).limit(parseInt(pageSize))
    const ret = {
      total: total,
      data: model
    }
    res.sendResult(ret, 200, '获取用户列表成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

module.exports = router