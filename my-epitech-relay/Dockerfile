FROM node:12-stretch
RUN apt-get update && apt-get install chromium -y
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm run build
EXPOSE $PORT
CMD ["npm", "start"]


# FROM node:12-stretch
# # WORKDIR /app/my-epitech-relay
# RUN apt-get update && apt-get install chromium -y
# RUN git clone https://github.com/EpitechMouliBot/my-epitech-relay.git .
# COPY . /app/my-epitech-relay
# WORKDIR /app/my-epitech-relay
# RUN npm install
# RUN npm run build
# EXPOSE $PORT
# CMD ["npm", "start"]
