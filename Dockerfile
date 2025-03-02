FROM node:latest as node
USER node
WORKDIR /usr/src/app

COPY . .

RUN ["npm", "ci"]
RUN ["npx", "astro", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=node /usr/src/app/dist /public
