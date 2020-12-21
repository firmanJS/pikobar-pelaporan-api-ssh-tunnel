module.exports = {
  apps: [{
    script: 'server.js',
    name: 'pelaporan-api-ssh',
    instances: 4,
    exec_mode: 'cluster',
    watch: true,
  }]
};
