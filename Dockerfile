FROM node:alpine as node
USER node
WORKDIR /usr/src/app

COPY . .

RUN ["npm", "ci"]
RUN ["npm", "run", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=node /usr/src/app/dist /public
