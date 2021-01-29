const express = require('express')
const rateLimit = require('express-rate-limit')
const { exportWaitAndRejectCase } = require('../api/cases')

const router = express.Router()
const limiter = rateLimit({
  windowMS: 3 * 60 * 1000, // 3 minutes
  max: 10
})

router.get('/api/export-case-waiting', limiter, async (req, res) => {
  await exportWaitAndRejectCase(req, res)
})

module.exports = router
