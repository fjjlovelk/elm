const express = require('express')
const router = express.Router()
const GoodsCate = require('../../models/GoodsCategory')

router.post('/category', async (req, res) => {
  try {
    const model = await GoodsCate.create(req.body)
    res.sendResult(model, 201, '添加商品分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

module.exports = router