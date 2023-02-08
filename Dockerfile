FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN apk add --no-cache bash tini

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["/bin/bash", "-c", "node deploy-commands.js; node index.js"]