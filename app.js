const express = require('express')
const helmet = require('helmet')
const compress = require('compression')
const cors = require('cors')
const json2xls = require('json2xls')
const { notFoundHandler, errorHandler } = require('./utils/exceptions')
const { connectWithRetry } = require('./config/db')
const router = require('./routes')

const app = express()

app.use(helmet());
app.use(compress()) // gzip compression
app.use(helmet()) // secure apps by setting various HTTP headers
app.use(cors()) // enable cors
app.use(express.json({ limit: '200kb' }))
app.use(json2xls.middleware) // middleware json2xls
connectWithRetry() // connection to database
app.use(router)
app.use(notFoundHandler) // 404 handler
app.use(errorHandler) // error handler

module.exports = app
