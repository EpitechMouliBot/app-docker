FROM node:16
WORKDIR /app/discord-bot
COPY ["package*.json", "./"]
RUN npm install
COPY . .
# CMD ["npm", "start"]
CMD ["node", "src/index.js"]
