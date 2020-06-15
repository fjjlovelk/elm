const express = require('express')
const router = express.Router()
const Address = require('../../models/Address')

// 获取某个用户的地址列表
router.get('/list/:userId', async (req, res) => {
  try {
    const model = await Address.find({ user: req.params.userId })
    res.sendResult(model, 200, '获取地址列表成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

// 根据地址id获取地址详情
router.get('/:id', async (req, res) => {
  try {
    const model = await Address.findById(req.params.id)
    res.sendResult(model, 200, '获取地址详情成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

router.post('/', async (req, res) => {
  try {
    await Address.create(req.body)
    res.sendResult('ok', 201, '新建地址成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

router.put('/:id', async (req, res) => {
  try {
    await Address.findByIdAndUpdate(req.params.id, req.body)
    res.sendResult('ok', 200, '修改地址成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除地址成功')
  } catch (error) {
    res.sendResult(false, 500, '服务器内部错误')
    throw error
  }
})

module.exports = router