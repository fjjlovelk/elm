const express = require('express')
const router = express.Router()
const GoodsCate = require('../../models/GoodsCategory')
const Goods = require('../../models/Goods')

// 获取、添加、删除 商品分类
router.get('/category', async (req, res) => {
  try {
    const model = await GoodsCate.find()
    res.sendResult(model, 200, '获取商品分类列表成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})
router.post('/category', async (req, res) => {
  try {
    const model = await GoodsCate.create(req.body)
    res.sendResult(model, 201, '添加商品分类成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})
router.delete('/category/:id', async (req, res) => {
  try {
    await GoodsCate.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除商品分类成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})

// 获取、添加、删除 商品
router.get('/', async (req, res) => {
  try {
    const model = await Goods.find()
    res.sendResult(model, 200, '获取商品列表成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})
router.post('/', async (req, res) => {
  try {
    const model = await Goods.create(req.body)
    res.sendResult(model, 201, '添加商品成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})
router.delete('/:id', async (req, res) => {
  try {
    await Goods.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除商品成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})

module.exports = router