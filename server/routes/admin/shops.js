const express = require('express')
const router = express.Router()
const { Cate, SubCate } = require('../../models/ShopCategory')
const Shop = require('../../models/Shop')

// 获取所有分类
router.get('/category', async (req, res) => {
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
})
// 添加一级分类
router.post('/category', async (req, res) => {
  const model = await Cate.create(req.body)
  res.sendResult(model, 201, '添加一级分类成功')
})
// 删除一级分类
router.delete('/category/:id', async (req, res) => {
  await Cate.findByIdAndDelete(req.params.id)
  await SubCate.deleteMany({ parent: req.params.id })
  res.sendResult('ok', 200, '删除一级分类成功')
})
// 修改一级分类
router.put('/category/:id', async (req, res) => {
  await Cate.findByIdAndUpdate(req.params.id, req.body)
  res.sendResult('ok', 200, '修改一级分类成功')
})

// 添加二级分类
router.post('/subCategory', async (req, res) => {
  const model = await SubCate.create(req.body)
  res.sendResult(model, 201, '添加二级分类成功')
})
// 删除二级分类
router.delete('/subCategory/:id', async (req, res) => {
  await SubCate.findByIdAndDelete(req.params.id)
  res.sendResult('ok', 200, '删除二级分类成功')
})
// 修改二级分类
router.put('/subCategory/:id', async (req, res) => {
  await SubCate.findByIdAndUpdate(req.params.id, req.body)
  res.sendResult('ok', 200, '修改二级分类成功')
})

// 获取所有商家
router.get('/', async (req, res) => {
  const { pageNum, pageSize } = req.query
  const total = await Shop.countDocuments()
  const model = await Shop.find()
    .populate({ path: 'category', populate: { path: 'parent', select: 'name' } })
    .skip((parseInt(pageNum) - 1) * parseInt(pageSize))
    .limit(parseInt(pageSize))
  const ret = {
    total: total,
    data: model
  }
  res.sendResult(ret, 200, '获取商家列表成功')
})
// 添加商家
router.post('/', async (req, res) => {
  const model = await Shop.create(req.body)
  res.sendResult(model, 201, '添加商家成功')
})
// 删除商家
router.delete('/:id', async (req, res) => {
  await Shop.findByIdAndDelete(req.params.id)
  res.sendResult('ok', 200, '删除商家成功')
})

module.exports = router