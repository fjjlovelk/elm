const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/shops', require('./shops'))
router.use('/goods', require('./goods'))
router.use('/address', require('./address'))
router.use('/orders', require('./orders'))

module.exports = router