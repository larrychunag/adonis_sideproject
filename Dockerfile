FROM node:lts-alpine

WORKDIR /home/node/app

COPY build /home/node/app/

RUN npm ci

EXPOSE 3333
 
ENTRYPOINT ["node","server.js"]