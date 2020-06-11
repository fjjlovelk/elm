const express = require('express')
const router = express.Router()
const GoodsCate = require('../../models/GoodsCategory')
const Goods = require('../../models/Goods')

// 获取、添加、删除 商品分类
router.get('/category/:id', async (req, res) => {
  try {
    const model = await GoodsCate.find({ shop: req.params.id })
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
  const { query, pageNum, pageSize } = req.query
  try {
    const total = await Goods.countDocuments()
    const model = await Goods.find()
      .where({ name: new RegExp(query) })
      .populate({ path: 'shop', select: 'name address' })
      .populate('category')
      .skip((parseInt(pageNum) - 1) * parseInt(pageSize))
      .limit(parseInt(pageSize))
    const ret = {
      total: total,
      data: model
    }
    res.sendResult(ret, 200, '获取商品列表成功')
  } catch (err) {
    res.sendResult(err.message, 500, '服务器内部错误, ' + err.message)
    throw err
  }
})
// 根据id获取商品详情
router.get('/:id', async (req, res) => {
  try {
    const model = await Goods.findById(req.params.id)
      .populate({ path: 'shop', select: 'name' })
      .populate('category')
    res.sendResult(model, 200, '获取商品详情成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
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
// 修改商品
router.put('/:id', async (req, res) => {
  try {
    await Goods.findByIdAndUpdate(req.params.id, req.body)
    res.sendResult('ok', 200, '修改商品成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
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