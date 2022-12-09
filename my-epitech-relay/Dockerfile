FROM node:12-stretch

# RUN apt-get update && apt-get install chromium -y

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm install

RUN npm run build

EXPOSE 8090

CMD ["npm", "start"]