FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN apk add --no-cache tini

ENTRYPOINT [ "/sbin/tini", "--" ]

CMD ["node", "deploy-commands.js", "&&", "node", "index.js"]