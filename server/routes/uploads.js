const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: __dirname + '/../uploads' })

router.post('/', upload.single('file'), (req, res) => {
  req.file.url = `http://www.fjj.cool/uploads/${req.file.filename}`
  res.send(req.file)
})

module.exports = router