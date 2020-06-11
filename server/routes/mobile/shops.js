const express = require('express')
const router = express.Router()
const { Cate, SubCate } = require('../../models/ShopCategory')
const Shop = require('../../models/Shop')

// 获取所有的一级商家分类
router.get('/category', async (req, res) => {
  try {
    const model = await Cate.find()
    res.sendResult(model, 200, '获取商家一级分类成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 根据一级分类id获取二级分类
router.get('/subCategory', async (req, res) => {
  try {
    const model = await SubCate.find({ parent: req.query.id })
    res.sendResult(model, 200, '获取商家二级分类成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 获取商家
router.get('/', async (req, res) => {
  const { query, pageNum, pageSize } = req.query
  try {
    const total = await Shop.countDocuments()
    const model = await Shop.find()
      .where({ name: new RegExp(query) })
      .skip((parseInt(pageNum) - 1) * parseInt(pageSize))
      .limit(parseInt(pageSize))
    const ret = {
      total: total,
      data: model
    }
    res.sendResult(ret, 200, '获取商家列表成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 根据id获取商家详情
router.get('/:id', async (req, res) => {
  try {
    const model = await Shop.findById(req.params.id)
    res.sendResult(model, 200, '获取商家详情成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

module.exports = router