FROM node:12.16-alpine AS builder
EXPOSE 3000
WORKDIR /src
COPY . .

RUN npm i && npm run build
RUN ls -la

ENTRYPOINT [ "npm", "run", "start:prod" ]