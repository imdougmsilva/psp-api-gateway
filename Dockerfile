FROM node:12.11.1-alpine

ENV NODE_PATH=/app

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5053

CMD [ "npm", "start" ]
