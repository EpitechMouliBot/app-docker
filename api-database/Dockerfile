FROM node:15-alpine
WORKDIR /app
COPY ["package*.json", "./"]
RUN npm install
COPY . .
EXPOSE $PORT
CMD ["node", "src/index.js"]
