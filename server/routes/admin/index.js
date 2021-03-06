const express = require('express')
const router = express.Router()
const adminAuth = require('../../middleware/adminAuth')

router.use('/login', require('./login'))
router.use('/admins', adminAuth, require('./admins'))
router.use('/users', adminAuth, require('./users'))
router.use('/shops', adminAuth, require('./shops'))
router.use('/goods', adminAuth, require('./goods'))

module.exports = router