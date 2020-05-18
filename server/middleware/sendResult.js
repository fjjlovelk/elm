module.exports = (req, res, next) => {
  res.sendResult = (data, code, message) => {
    res.status(code)
    res.json({
      "data": data,
      "meta": {
        "status": code,
        "message": message
      }
    })
  }
  next()
}