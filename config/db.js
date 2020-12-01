const tunnel = require('tunnel-ssh')
const mongoose = require('mongoose')
const fs = require('fs')
require('dotenv').config()

const sshTunnelConfig = {
  username: process.env.USERNAME_HOST,
  privateKey: fs.readFileSync(`${process.env.SSH_KEY_PATH}`),
  host: process.env.REMOTE_HOST,
  port: process.env.PORT_HOST,
  dstHost: process.env.DNS_SERVER,
  dstPort: process.env.PORT_SERVER,
  localHost: process.env.LOCAL_HOST,
  localPort: process.env.PORT_LOCAL
}
const connectWithRetry = () => {
  tunnel(sshTunnelConfig, (error) => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log('SSH connection error: ', error)
    }
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error(`${err}`)
        setTimeout(connectWithRetry(), 5000)
      } else {
        // eslint-disable-next-line no-console
        console.log('mongoDB Connected ✅')
      }
    })
  })
}

module.exports = {
  connectWithRetry
}
