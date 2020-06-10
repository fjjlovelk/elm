const express = require('express')
const router = express.Router()

router.use('/login', require('./login'))
router.use('/shops', require('./shops'))

module.exports = router