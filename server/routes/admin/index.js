const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middleware/auth')

router.use('/login', require('./login'))
router.use('/users', authMiddleware, require('./users'))
router.use('/shops', authMiddleware, require('./shops'))
router.use('/foods', authMiddleware, require('./foods'))
router.use('/orders', authMiddleware, require('./orders'))

module.exports = router
