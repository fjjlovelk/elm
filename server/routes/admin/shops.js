const express = require('express')
const router = express.Router()
const { Cate, SubCate } = require('../../models/ShopCategory')

// 获取一级分类
router.get('/category', async (req, res) => {
  const model = await Cate.find()
  res.sendResult(model, 200, '获取分类成功')
})
// 添加一级分类
router.post('/category', async (req, res) => {
  const model = await Cate.create(req.body)
  res.sendResult(model, 201, '添加一级分类成功')
})
// 删除一级分类
router.delete('/category/:id', async (req, res) => {
  await Cate.findByIdAndDelete(req.params.id)
  res.sendResult('ok', 200, '删除分类成功')
})

module.exports = router