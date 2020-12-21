const express = require('express')
const cases = require('./cases')

const router = express.Router()

router.get('/api', (req, res) => {
  res.json(req.headers)
})
router.use(cases)

module.exports = router
