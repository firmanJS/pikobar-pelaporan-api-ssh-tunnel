const express = require('express')
const { exportWaitAndRejectCase } = require('../api/cases')

const router = express.Router()

router.get('/api/export-case-waiting', async (req, res) => {
  await exportWaitAndRejectCase(req, res)
})

module.exports = router
