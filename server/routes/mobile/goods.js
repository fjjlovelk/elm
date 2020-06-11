const express = require('express')
const router = express.Router()
const Goods = require('../../models/Goods')
const GoodsCate = require('../../models/GoodsCategory')

// 获取商家对应的商品分类
router.get('/category/:id', async (req, res) => {
  try {
    const model = await GoodsCate.find({ shop: req.params.id })
    res.sendResult(model, 200, '获取商品分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

// 根据商品分类id找到对应的商品
router.get('/:id', async (req, res) => {
  try {
    const model = await Goods.find({ category: req.params.id })
    res.sendResult(model, 200, '获取商品成功')
  } catch (error) {
    throw error
  }
})

module.exports = router