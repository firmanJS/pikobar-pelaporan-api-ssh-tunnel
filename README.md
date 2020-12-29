### Pikobar Pelaporan API Koneksi Ke Database Menggunakan SSH Tunnel
[![Maintainability](https://api.codeclimate.com/v1/badges/256debe3f520afa16e5a/maintainability)](https://codeclimate.com/github/firmanJS/pikobar-pelaporan-api-ssh-tunnel/maintainability)

#### Cara Menjalanakan
- copy file .env-sample di terminal dengan menggunakan perintah
```sh
cp .env-sample .env
```
- lalu isi kolom kolomnya
```sh
APP_PORT=3000
TZ=Asia/Jakarta
NODE_ENV=development
MONGO_URL= #MONGO URL
USERNAME_HOST=# username remote host
REMOTE_HOST=# remote host ip
PORT_HOST=# remote port host
DNS_SERVER= # server address
PORT_SERVER=# port of db in host
PORT_LOCAL=#port db local remote
LOCAL_HOST=#host in local remote
SSH_KEY_PATH=# path to ssh key in your machine
```
- install package nya dengan perintah sebagai berikut
```sh
npm install
```
<!-- pm2 ecosystem # generates a config file -->
