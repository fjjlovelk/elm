const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middleware/auth')

router.use('/login', require('./login'))
router.use('/admins', authMiddleware, require('./admins'))
router.use('/shops', authMiddleware, require('./shops'))
router.use('/goods', authMiddleware, require('./goods'))
router.use('/orders', authMiddleware, require('./orders'))

module.exports = router
