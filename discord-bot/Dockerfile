# FROM node:16
# WORKDIR /app/discord-bot
# COPY ["package*.json", "./"]
# RUN npm install
# COPY . .
# CMD ["node", "src/index.js"]

FROM node:16
WORKDIR /app/api-database
RUN git clone https://github.com/EpitechMouliBot/discord-bot.git .
# COPY ["package*.json", "./"]
RUN npm install
# COPY . .
EXPOSE $PORT
CMD ["node", "src/index.js"]
