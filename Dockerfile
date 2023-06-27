FROM node:18-slim

WORKDIR /usr/home/app

COPY package*.json .

RUN npm install

COPY . .