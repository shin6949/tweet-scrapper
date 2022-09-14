FROM node:16
LABEL org.opencontainers.image.source='https://github.com/shin6949/tweet-scrapper'

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install  --production=true

COPY . .
CMD ["yarn", "start"]