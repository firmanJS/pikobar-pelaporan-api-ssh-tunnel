FROM node:14-alpine

LABEL Maintainer="Firman Abdul Hakim <fimzhakim@gmail.com>" \
      Description="Nodejs Expressjs pelaporan api for ssh tunnel"

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install && yarn cache clean --force

# Bundle app source
COPY . .

EXPOSE 2000

CMD ["npm", "start"]