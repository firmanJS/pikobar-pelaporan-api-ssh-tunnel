const log = require('./logger');

const notFoundHandler = (req, res) => {
  const err = new Error('Not Found')
  log.error(err.toString())
  return res.status(404).json({
    errors: err.toString(),
    status: 404,
    messages: `Route : ${req.url} Not found.`
  })
}

const errorHandler = (error, _req, res) => {
  if (!error.statusCode) error.statusCode = 500
  log.error(error)
  return res.status(error.statusCode).json({
    errors: error,
    status: error.statusCode,
    messages: error.toString()
  })
}

const successResponse = (res, msg, result) => res.status(200).json({
  code: 200,
  messages: `${msg} data successfull`,
  status: 'success',
  data: result
})

const errorResponse = (res, msg, code) => {
  const message = {
    message: `Error. ${msg}`,
    status: 'bad request',
    data: []
  }
  if (msg.errmsg) {
    message.message = msg.errmsg
  } else if (msg.message) {
    message.message = msg.message
  } else if (msg.errors) {
    message.message = msg.errors
  }
  res.status(code).json(message)
}

module.exports = {
  notFoundHandler,
  errorHandler,
  successResponse,
  errorResponse
}
