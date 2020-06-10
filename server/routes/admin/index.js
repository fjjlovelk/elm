const express = require('express')
const router = express.Router()
const adminAuth = require('../../middleware/adminAuth')

router.use('/login', require('./login'))
router.use('/admins', adminAuth, require('./admins'))
router.use('/shops', adminAuth, require('./shops'))
router.use('/goods', adminAuth, require('./goods'))
router.use('/orders', adminAuth, require('./orders'))

module.exports = router