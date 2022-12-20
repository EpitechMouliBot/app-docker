FROM node:15-alpine
WORKDIR /app/api-database
RUN git clone https://github.com/EpitechMouliBot/api-db.git .
# COPY ["package*.json", "./"]
RUN npm install
# COPY . .
EXPOSE $PORT
CMD ["node", "src/index.js"]
