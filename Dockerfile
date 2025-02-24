FROM oven/bun:latest as bun
USER bun
WORKDIR /usr/src/app

COPY . .

RUN ["bun", "install", "--frozen-lockfile"]
RUN ["bunx", "--bun", "astro", "build"]

FROM ghcr.io/static-web-server/static-web-server:latest
WORKDIR /
COPY --from=bun /usr/src/app/dist /public
