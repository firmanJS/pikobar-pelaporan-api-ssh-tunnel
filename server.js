const app = require('./app')
require('dotenv').config()

const port = process.env.APP_PORT
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`pikobar-pelaporan-api-ssh listening on port:${port}`)
  /* eslint-enable no-console */
})
