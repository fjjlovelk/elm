const express = require('express')
const router = express.Router()
const Order = require('../../models/Order')

// 根据用户id获取订单列表
router.get('/list', async (req, res) => {
  const { userId, pageNum, pageSize } = req.query
  try {
    const total = await Order.find({ user: userId }).countDocuments()
    const model = await Order.find()
      .where({ user: userId })
      .skip((parseInt(pageNum) - 1) * parseInt(pageSize))
      .limit(parseInt(pageSize))
      .populate({
        path: 'shop',
        select: 'name shop_img delivery_fee'
      }).populate({
        path: 'address'
      }).populate({
        path: 'goodsList.goods',
        select: 'name'
      })
    const ret = {
      total: total,
      data: model
    }
    res.sendResult(ret, 200, '获取订单列表成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 根据订单id获取订单详情
router.get('/:id', async (req, res) => {
  try {
    const model = await Order.findById(req.params.id)
      .populate({
        path: 'shop',
        select: 'name delivery_fee'
      }).populate({
        path: 'address'
      }).populate({
        path: 'goodsList.goods',
        select: 'name'
      })
    res.sendResult(model, 200, '获取订单详情成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 添加订单
router.post('/', async (req, res) => {
  try {
    await Order.create(req.body)
    res.sendResult('ok', 201, '创建订单成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 删除订单
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除订单成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

module.exports = router