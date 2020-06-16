const express = require('express')
const router = express.Router()
const GoodsCate = require('../../models/GoodsCategory')
const mongoose = require('mongoose')

// 获取商家对应的商品分类
router.get('/category/:id', async (req, res) => {
  try {
    const model = await GoodsCate.aggregate([
      {
        $match: {
          'shop': mongoose.Types.ObjectId(req.params.id)
        }
      },
      {
        $lookup: {
          from: 'goods',
          localField: '_id',
          foreignField: 'category',
          as: 'children'
        }
      }
    ])
    res.sendResult(model, 200, '获取商品分类成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

module.exports = router