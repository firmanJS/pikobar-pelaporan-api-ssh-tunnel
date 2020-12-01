const express = require('express')
const cases = require('./cases')

const router = express.Router()

router.use(cases)

module.exports = router
