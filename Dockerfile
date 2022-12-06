FROM node:16-bullseye-slim
LABEL org.opencontainers.image.source='https://github.com/shin6949/tweet-scrapper'

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm && npm upgrade -g yarn
RUN yarn install --production=true

COPY . .
CMD ["yarn", "start"]