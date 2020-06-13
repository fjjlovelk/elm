const express = require('express')
const router = express.Router()
const Goods = require('../../models/Goods')
const GoodsCate = require('../../models/GoodsCategory')

// 获取商家对应的商品分类
router.get('/category/:id', async (req, res) => {
  try {
    let model = []
    const goodsCate = await GoodsCate.find({ shop: req.params.id })
    goodsCate.map(async item => {
      const goods = await Goods.find({ category: item._id })
      item = item.toObject()
      item['children'] = goods
      model.push(item)
    })
    setTimeout(() => {
      res.sendResult(model, 200, '获取商品分类成功')
    }, 1000)
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

module.exports = router