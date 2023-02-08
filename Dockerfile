FROM node:latest

# Create the bot's directory

RUN mkdir -p /usr/src/bot

WORKDIR /usr/src/bot

COPY package.json /usr/src/bot

RUN npm install

COPY . /usr/src/bot

ENV ClientID_TEST=""
ENV GuildID_TEST=""
ENV Token_TEST=""

# Start the bot.

CMD ["node", "index.js"]