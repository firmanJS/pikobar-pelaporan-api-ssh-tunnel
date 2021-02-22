const express = require('express')
const rateLimit = require('express-rate-limit')
const { exportWaitAndRejectCase, exportCase } = require('../api/cases')

const router = express.Router()
const limiter = rateLimit({
  windowMS: 3 * 60 * 1000, // 3 minutes
  max: 10
})

router.get('/export-case-waiting', limiter, async (req, res) => {
  await exportWaitAndRejectCase(req, res)
})

router.get('/export-case', async (req, res) => {
  await exportCase(req, res)
})

module.exports = router
