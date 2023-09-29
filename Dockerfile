FROM node:18.18.0-bullseye-slim

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y --no-install-recommends git

USER node
