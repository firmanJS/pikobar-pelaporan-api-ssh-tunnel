const app = require('./app')
require('dotenv').config()

const port = process.env.APP_PORT
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`pikobar-pelaporan-api-ssh listening on port:${port}`)
  /* eslint-enable no-console */
})

// const cluster = require('cluster')
// const numCPUs = require('os').cpus().length

// const port = process.env.PORT || 3000

// const masterProcess = () => Array.from(Array(numCPUs)).map(cluster.fork)
// const childProcess = () => app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`pikobar-pelaporan-api-ssh listening on port:${port}`)
//   /* eslint-enable no-console */
// })
// if (process.env.NODE_ENV === 'production') {
//   masterProcess()
// } else {
//   childProcess()
// }
// cluster.on('exit', () => cluster.fork())
// eslint-disable-next-line import/order
// const app = require('./app')
// const cluster = require('cluster')

// const port = process.env.PORT || 3000
// const cCPUs = require('os').cpus().length

// if (cluster.isMaster) {
//   // Create a worker for each CPU
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < cCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('online', (worker) => {
//     console.log(`Worker ${worker.process.pid} is online.`);
//   })
//   cluster.on('exit', (worker) => {
//     console.log(`worker ${worker.process.pid} died.`);
//   })
// } else {
//   app.listen(port, () => {
//   /* eslint-disable no-console */
//     console.log(`pikobar-pelaporan-api-ssh listening on port:${port} ${cluster.worker.id}`)
//   /* eslint-enable no-console */
//   })
// }
