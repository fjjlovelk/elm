const express = require('express')
const router = express.Router()
const { Cate, SubCate } = require('../../models/ShopCategory')
const Shop = require('../../models/Shop')

// 获取所有分类
router.get('/category', async (req, res) => {
  try {
    const model = await Cate.aggregate([
      {
        $lookup: {
          from: 'shopsubcategories',
          localField: '_id',
          foreignField: 'parent',
          as: 'children'
        }
      }
    ])
    res.sendResult(model, 200, '获取分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }

})
// 添加一级分类
router.post('/category', async (req, res) => {
  try {
    const model = await Cate.create(req.body)
    res.sendResult(model, 201, '添加一级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 删除一级分类
router.delete('/category/:id', async (req, res) => {
  try {
    await Cate.findByIdAndDelete(req.params.id)
    await SubCate.deleteMany({ parent: req.params.id })
    res.sendResult('ok', 200, '删除一级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 修改一级分类
router.put('/category/:id', async (req, res) => {
  try {
    await Cate.findByIdAndUpdate(req.params.id, req.body)
    res.sendResult('ok', 200, '修改一级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

// 添加二级分类
router.post('/subCategory', async (req, res) => {
  try {
    const model = await SubCate.create(req.body)
    res.sendResult(model, 201, '添加二级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 删除二级分类
router.delete('/subCategory/:id', async (req, res) => {
  try {
    await SubCate.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除二级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 修改二级分类
router.put('/subCategory/:id', async (req, res) => {
  try {
    await SubCate.findByIdAndUpdate(req.params.id, req.body)
    res.sendResult('ok', 200, '修改二级分类成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

// 获取商家
router.get('/', async (req, res) => {
  try {
    const { query, pageNum, pageSize } = req.query
    const total = await Shop.countDocuments()
    const model = await Shop.find()
      .where({ name: new RegExp(query) })
      .populate({ path: 'category', populate: { path: 'parent', select: 'name' } })
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
      .populate({ path: 'category', populate: { path: 'parent' } })
    res.sendResult(model, 200, '获取商家详情成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 添加商家
router.post('/', async (req, res) => {
  try {
    const model = await Shop.create(req.body)
    res.sendResult(model, 201, '添加商家成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 修改商家
router.put('/:id', async (req, res) => {
  try {
    await Shop.findByIdAndUpdate(req.params.id, req.body)
    res.sendResult('ok', 200, '修改商家成功')
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})
// 删除商家
router.delete('/:id', async (req, res) => {
  try {
    await Shop.findByIdAndDelete(req.params.id)
    res.sendResult('ok', 200, '删除商家成功')
    return
  } catch (err) {
    res.sendResult(false, 500, '服务器内部错误')
    throw err
  }
})

module.exports = router