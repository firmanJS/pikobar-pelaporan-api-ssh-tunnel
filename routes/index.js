const express = require('express')
const cases = require('./cases')

const router = express.Router()

router.get('/api/v1/', (req, res) => {
  res.json(req.headers)
})

router.use('/api/v1/cases', cases)

module.exports = router
